import { serializeStructuredData } from '@/lib/schema-serialization';

interface StructuredDataProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function StructuredData({ data }: StructuredDataProps) {
  const schemas = Array.isArray(data) ? data : [data];
  return <>{schemas.map((schema, index) => (
    <script key={index} type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeStructuredData(schema) }} />
  ))}</>;
}
