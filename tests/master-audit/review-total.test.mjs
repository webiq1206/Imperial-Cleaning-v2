import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  SHOW_REVIEW_TOTAL,
  INTERIM_REVIEW_LINE,
  hiddenReviewTotalText,
  visibleReviewTotalText,
  interimReviewPlainText,
  reviewAggregateRatingSchema,
  applyReviewAggregateRating,
} from './review-publication.mjs';

const GOOGLE_PLACE_URL = 'https://www.google.com/maps/place/Imperial+Cleaning+Inc/data=!4m7!3m6!1s0x53545b59cac2a7a5:0xdac81c3bdfcf0ea2';
const BESTPROS_URL = 'https://www.bestprosintown.com/id/idaho-falls/imperial-cleaning-inc-/';
const HIDDEN_TOTAL = '102+ verified reviews across Google, Porch, and BestProsInTown';

test('102+ total stays defined and is hidden from the public line', () => {
  assert.equal(SHOW_REVIEW_TOTAL, false);
  assert.equal(hiddenReviewTotalText(102), HIDDEN_TOTAL);
  assert.equal(visibleReviewTotalText(102), null);
  assert.equal(
    interimReviewPlainText(),
    'Rating: 5.0 on Google · Read our reviews · 34 reviews on BestProsInTown',
  );
  assert.equal(INTERIM_REVIEW_LINE.readReviewsLabel, 'Read our reviews');
  assert.equal(INTERIM_REVIEW_LINE.googleListingUrl, GOOGLE_PLACE_URL);
  assert.equal(INTERIM_REVIEW_LINE.bestProsLabel, '34 reviews on BestProsInTown');
  assert.equal(INTERIM_REVIEW_LINE.bestProsUrl, BESTPROS_URL);
});

test('hidden 102 reviewCount is not emitted as AggregateRating', () => {
  assert.equal(reviewAggregateRatingSchema(102), null);
  const emitted = applyReviewAggregateRating(
    { '@context': 'https://schema.org', '@type': 'Organization', name: 'Imperial Cleaning Inc' },
    102,
  );
  const json = JSON.stringify(emitted);
  assert.equal(json.includes('AggregateRating'), false);
  assert.equal(json.includes('reviewCount'), false);
  assert.equal(json.includes('ratingValue'), false);
  assert.equal(json.includes('102'), false);
  assert.equal(emitted['@type'], 'Organization');
});

test('checked pages and schema sources do not publish the 102+ total', async () => {
  const reviews = await readFile('data/reviews.ts', 'utf8');
  assert.match(reviews, /GOOGLE_REVIEW_COUNT = 42/);
  assert.match(reviews, /reviewCount: 26/);
  assert.match(reviews, /reviewCount: 34/);
  assert.match(reviews, /CROSS_PLATFORM_REVIEW_TOTAL/);
  const layout = await readFile('app/layout.tsx', 'utf8');
  assert.match(layout, /applyReviewAggregateRating\(/);
  assert.doesNotMatch(layout, /reviewCount/);
  assert.doesNotMatch(layout, /102\+/);
  for (const file of [
    'app/page.tsx',
    'app/reviews/page.tsx',
    'data/business-info.ts',
    'data/service-locations.ts',
    'components/shared/testimonials/testimonials-carousel.tsx',
  ]) {
    const text = await readFile(file, 'utf8');
    assert.doesNotMatch(text, /102\+|verified reviews across Google/, file);
  }
  const locationSchema = await readFile('lib/location-content-utils.ts', 'utf8');
  assert.doesNotMatch(locationSchema, /reviewCount|"@type": "AggregateRating"|'@type': 'AggregateRating'/);
  const section = await readFile('components/reviews-section.tsx', 'utf8');
  assert.match(section, /SHOW_REVIEW_TOTAL/);
  assert.match(section, /INTERIM_REVIEW_LINE/);
  assert.doesNotMatch(section, /102\+/);
});
