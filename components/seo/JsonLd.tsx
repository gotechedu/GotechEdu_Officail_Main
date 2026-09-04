import React from "react";

interface JsonLdProps {
  data: Record<string, any> | Record<string, any>[];
}

/**
 * Reusable JSON-LD Structured Data Component for Next.js
 * Safely serializes schema.org structured data into script tags
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
