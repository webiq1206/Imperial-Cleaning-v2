import { GOOGLE_LISTING_URL } from "./business-info";

// Verified customer reviews.
//
// RULES (owner decision 2026-06-10):
// - Only real reviews copied verbatim from the Google Business listing (or
//   another public review platform) may be added here. No composed or
//   "representative" quotes.
// - Each entry must include the platform source URL so every quote is
//   verifiable. Reviews are NOT emitted as Review/AggregateRating JSON-LD
//   until this file holds real entries; once it does, schema can be wired
//   to this data safely.
//
// To add a review: open the Google listing (link below), copy the reviewer's
// first name, star rating, date, and the exact review text into a new entry.

export interface VerifiedReview {
  /** Reviewer first name (and last initial if shown publicly) */
  author: string;
  /** 1-5 stars as shown on the platform */
  rating: number;
  /** ISO date of the review, e.g. "2026-03-14" */
  date: string;
  /** Exact review text, copied verbatim */
  text: string;
  /** Platform the review lives on */
  source: "Google" | "Porch" | "Yelp" | "Facebook";
  /** Public URL where the review can be verified */
  sourceUrl: string;
}

export { GOOGLE_LISTING_URL };

/**
 * Independently verifiable third-party rating snapshots.
 * Verified 2026-06-10 against the public profile pages.
 */
export const RATING_SOURCES = [
  {
    platform: "Porch",
    rating: 5.0,
    reviewCount: 26,
    url: "https://pro.porch.com/idaho-falls-id/home-cleaners/imperial-cleaning-inc/pp",
  },
  {
    platform: "BestProsInTown",
    rating: null as number | null,
    reviewCount: 34,
    url: "https://www.bestprosintown.com/id/idaho-falls/imperial-cleaning-inc-/",
  },
] as const;

/**
 * Real Google Business Profile reviews, supplied by the owner 2026-08-28 and
 * copied verbatim. All are 5 stars.
 *
 * Four further reviews exist on the listing with a star rating but no written
 * text (Christina B., Burton B., Tracy P., Thomas D.). They are omitted here
 * because this list renders quotes and there is nothing to quote; the listing
 * itself remains the authoritative count.
 *
 * DATES: entries marked `approxDate` were shown by Google as a relative age
 * ("3 weeks ago") rather than a calendar date, so the value is derived from
 * 2026-08-28 and is accurate to about a week. Every other date is exact as
 * displayed.
 *
 * Author names are reduced to first name plus last initial, per the interface
 * contract, even though Google displays them in full.
 */
export const verifiedReviews: VerifiedReview[] = [
  {
    author: "Burke H.",
    rating: 5,
    date: "2026-08-07",  // approxDate: derived from a relative timestamp
    text:
      "These guys are great!! We had them clean our 5 story apartment building and they did a fantastic job. Very thorough and professional. They showed up on time, every time with the right size crew and did a perfect job for us.",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Ryan S.",
    rating: 5,
    date: "2026-05-08",  // approxDate: derived from a relative timestamp
    text:
      "Imperial Cleaning has done several construction final cleans for us over the last year or more. Francisco and the crews have been very professional and have done great work for us. Also, their pricing is reasonable compared to others I’ve seen. Very responsive and easy to coordinate with! We will continue using Imperial Cleaning for future projects! Thanks Francisco!",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Kaleb E.",
    rating: 5,
    date: "2026-03-13",  // approxDate: derived from a relative timestamp
    text:
      "Had a tight schedule on a remodel that was finishing up. Needing someone fast and professional to help get the place clean after all the other trades had just finished that day. These guys stepped up to the plate and knocked it out of the park. Professional, extremely skilled, had all the right tools and machines, and was able to get the job done quickly. Went above and beyond!",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Amber V.",
    rating: 5,
    date: "2026-01-09",  // approxDate: derived from a relative timestamp
    text:
      "Great to work with. They were very thorough cleaning our large warehouse and production equipment. They went above and beyond to make sure we were very happy with the results. I would highly recommend them for commercial buildings.",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "V Josephson",
    rating: 5,
    date: "2026-01-09",  // approxDate: derived from a relative timestamp
    text:
      "I've used Imperial on multiple large-scale construction projects for final cleaning and they are definitely my go-to. Plus, you won't meet a nicer guy than the owner himself!",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Dustin P.",
    rating: 5,
    date: "2026-01-02",  // approxDate: derived from a relative timestamp
    text:
      "We’ve used this cleaning company for the past five years to keep our store clean and looking great, and they’ve been fantastic to work with. They’re consistent, reliable, and always go the extra mile to make sure everything looks professional. We’re really grateful for their hard work and partnership over the years. Highly recommend!",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Shawna J.",
    rating: 5,
    date: "2025-06-02",
    text:
      "Highly recommend Imperial for your commercial cleaning needs. The owner and crew offer top notch service and work diligently and quickly to address any concerns our office has had. They have been great to work with for several years and I can't say enough good things about them :)",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Farrell H.",
    rating: 5,
    date: "2025-03-25",
    text:
      "Super impressed with Francisco's professional service. His crew made little work and worry out of the job. They even came in under budget! Highly recommended for commercial services.",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Andy L.",
    rating: 5,
    date: "2025-02-19",
    text:
      "Francisco and his staff are a great service they worked around my subs and long weekend hours so that I was able to complete the project on time and receive a CO for are customer thanks guys",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "CJ D.",
    rating: 5,
    date: "2025-01-10",
    text:
      "Imperial Cleaning did an amazing job! I bought a new house and the builder didn’t clean up after construction. I had tried cleaning up myself and also hired house cleaning service but the job seemed insurmountable. A few broken vacuums and lots of frustration later, a came across Imperial Cleaning and they took care of everything and made it look easy. They paid attention to every detail during the cleaning process and even scheduling and having my questions answers was such a breeze as Fernando was so patient and accommodating. Highly recommend, a hundred percent!",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Office Manager",
    rating: 5,
    date: "2024-11-14",
    text:
      "We are lucky to work with a great partner such as Imperial Cleaning. They do a wonderful job with our building. If there is ever a need it's easy to get ahold of Francisco or a team member and they respond timely.",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "McKenna K.",
    rating: 5,
    date: "2024-11-05",
    text:
      "This cleaning company is very reliable and meets your needs!! Francisco is great and very personable!",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Daniel S.",
    rating: 5,
    date: "2024-11-05",
    text:
      "Imperial Cleaning serviced our fitness center. They do a fantastic job at explaining their process and will provide consistent, quality service. Would recommend to any companies/families/offices in southeast Idaho.",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Gregory S.",
    rating: 5,
    date: "2024-11-04",
    text:
      "I hired Imperial Cleaning to perform a final deep clean of a 3 story, climate controlled storage facility with 1000 rooms. The results were so much more than I expected. They cleaned every inch of this huge building, even things I didn’t think of. Communication was excellent, staff was very kind, and the results really made this project shine. I will definitely be using them on my next project.",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Derek E.",
    rating: 5,
    date: "2024-05-03",
    text:
      "Imperial Cleaning is a great company. They're thorough and reliable, and Francisco comes by to see how things are going and to see if they need to change anything in their cleaning regularly. He's been really great to work with. Definitely give them a call if you're needing a cleaning company!",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Sarah S.",
    rating: 5,
    date: "2024-05-03",
    text:
      "Francisco and his team at Imperial Cleaning have continued to provide our clinic with a clean space for us to work! We enjoy their responsiveness and attention to detail.",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Brent T.",
    rating: 5,
    date: "2024-03-18",
    text:
      "They've been in the business for over 10 years and it shows. Quality work is ensured. They're pretty versatile and do good, honest work. I'd recommend them for any large scale cleaning.\n\nI helped out with a project cleaning storage units. I was impressed by how thorough the process was. Each room was inspected to ensure a quality clean.",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Christopher J.",
    rating: 5,
    date: "2024-03-18",
    text:
      "Wonderful to work with this great team. Francisco cares about all who are around him! They are hard workers and do high quality cleaning. 🧼🧹",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Miles F.",
    rating: 5,
    date: "2024-02-21",
    text:
      "I work for a commercial general contractor Okland Construction, we’ve used Imperial on various big projects in Idaho falls, both were short notice to get them on. They manned up right away and got it done quickly to meet our schedule, but also did a quality job. We’ve had multiple owners very pleased with how clean we turn the buildings over. Fransisco is very organized, and structured with his crews. Very pleased with Imperial, we will definitely use them on future projects!",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Chris E.",
    rating: 5,
    date: "2023-08-30",
    text:
      "Bateman-Hall project for new ICCU Shelley branch. Imperial Cleaning did a great job. Easy to work with and went above and beyond what I expected.",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Shawn F.",
    rating: 5,
    date: "2023-06-23",
    text:
      "The Imperial cleaning crews did a great job. They cleaned everything from the ropes of cabinets to the timber trusses in the great room. Very impressed with the service.",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Jeremy F.",
    rating: 5,
    date: "2023-05-08",
    text:
      "Awesome company if you want it done right",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Rick L.",
    rating: 5,
    date: "2022-12-02",
    text:
      "On behalf of Bateman Hall Inc we can’t say enough good things about Imperial Cleaning Inc. Francisco, and his staff of cleaning professionals are incredibly hard working, super productive , courteous and detail oriented. They performed a monumental task construction cleaning and final cleaning the newly opened Mountain America Center and Hero Arena. ICI is the best in the business.",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Deb M.",
    rating: 5,
    date: "2022-08-05",
    text:
      "Imperial Cleaning is excellent to work with. Francisco is professional and communicates on things in great way and does a super job!",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Laura D.",
    rating: 5,
    date: "2022-08-03",
    text:
      "This company has cleaned my office building for years. They are thorough and reliable. They are always friendly and efficient and any issues received attention immediately. They are conscientious about doing a great job and they do!",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Cody C.",
    rating: 5,
    date: "2022-02-17",
    text:
      "Imperial cleaning is the best in the business. Easy to work with and always looking to improve and increase efficiency. 1000% satisfied",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Garrett P.",
    rating: 5,
    date: "2021-09-21",
    text:
      "I would highly recommend Imperial Cleaners. They were very responsive and the quality of their work is exceptional.",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "CrossFit Edify",
    rating: 5,
    date: "2021-05-12",
    text:
      "These dudes were awesome! I called Francisco, and he was over at my gym with this ionizing spray thing that had everything sanitized and cleaned the next day.\nReally damn pleased with my service. 5 stars for these guys.",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Christine C.",
    rating: 5,
    date: "2021-01-12",
    text:
      "Francisco and his cleaning crew did an outstanding job cleaning in our office. They were professional and timely in their efforts and I was truly impressed with their standards of care and quality. I would be happy to recommend them in all future jobs and endeavors. Christine Clark, Idaho Falls Clinic.",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Jordan S.",
    rating: 5,
    date: "2020-12-03",
    text:
      "Imperial Cleaning is an awesome company. They keep our building so clean. They are so good to work with us and our schedule. Francisco is a great guy. I’d highly recommend them to everyone.",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Aimee M.",
    rating: 5,
    date: "2020-03-21",
    text:
      "By far the best cleaning company that I have ever used! We had completely remodeled the inside of our house which left a thick layer of construction dust over everything, ceiling to floor! Imperial Cleaning went above and beyond my expectations in cleaning every inch of the house, and I couldn’t be more pleased with how sparkling clean the house was left. The owner, Francisco, was quick and easy to correspond with. Would highly recommend them for any of your cleaning needs!",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Travis S.",
    rating: 5,
    date: "2020-01-15",
    text:
      "Great prices and great service. Always get the job done right. Won't go through anyone else!",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Amanda P.",
    rating: 5,
    date: "2019-10-01",
    text:
      "These guys have done an amazing job cleaning for the company I work for. They are dependable, fairly priced and do impeccable work!",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Joseph S.",
    rating: 5,
    date: "2019-08-01",
    text:
      "Wow! Very impressive quality of work! It had been many years since our carpeting had received any attention and these people did it right and at a very reasonable price. Obviously, we hardily recommend them!",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Austin W.",
    rating: 5,
    date: "2019-07-26",
    text:
      "We had Imperial come clean the carpet in our home and they did a fantastic job. Francisco and his crew do high quality work and treat their customers like family. I would highly recommend Imperial Cleaning to anyone who needs a job done, whether that job be big or small. They pay attention to the little details and are very affordable. This is a great company that I will be using for any of my future cleaning needs.",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Cala A.",
    rating: 5,
    date: "2019-06-26",
    text:
      "We use Imperial Cleaning for our office buildings. Francisco is very attentive to our needs. His crew is very dependable and we have been very happy with their work. They did construction cleaning when we were finishing a new building and they did great at that as well. We highly recommend them!",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Shayla P.",
    rating: 5,
    date: "2019-05-21",
    text:
      "Imperial Cleaning did such an amazing job cleaning my new home we built before we moved in! There was SO much construction dust and dirt and now it is sparkling clean! They took the time to clean out each and every crevasse in my kitchen and bathroom cabinets! Very impressed with the attention to detail!",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
  {
    author: "Ann Michelle C.",
    rating: 5,
    date: "2019-05-09",
    text:
      "I highly recommend Imperial Cleaning! We have been using Francisco and his team to clean our buildings for over five years. They do the same awesome work today as they did the first day we hired them. They are professional, thorough and take pride in their work. Francisco stops in frequently to check on things and ensure we are satisfied with their service. If we have ever had a concern, it only takes one call and he takes care of it immediately. We have used several cleaning companies over the years and Imperial Cleaning Service is by far the best!",
    source: "Google",
    sourceUrl: GOOGLE_LISTING_URL,
  },
];
