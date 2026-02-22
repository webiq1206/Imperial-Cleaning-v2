import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, decimal, boolean, jsonb, date, index, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  company: text("company"),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  location: text("location").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contractors = pgTable("contractors", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  companyName: text("company_name").notNull(),
  website: text("website"),
  phone: text("phone"),
  email: text("email"),
  address: text("address"),
  city: text("city"),
  state: text("state"),
  contacts: jsonb("contacts").default([]),
  relationshipStatus: text("relationship_status").default("prospect"),
  relationshipNotes: text("relationship_notes"),
  firstContactDate: date("first_contact_date"),
  lastContactDate: date("last_contact_date"),
  projectsBid: integer("projects_bid").default(0),
  projectsWon: integer("projects_won").default(0),
  totalRevenue: decimal("total_revenue", { precision: 12, scale: 2 }).default("0"),
  avgProjectSize: decimal("avg_project_size", { precision: 10, scale: 2 }),
  typicalProjectTypes: text("typical_project_types").array(),
  geographicFocus: text("geographic_focus").array(),
  companySize: text("company_size"),
  preferredBidFormat: text("preferred_bid_format"),
  paymentTerms: text("payment_terms"),
  notes: text("notes"),
  tags: text("tags").array(),
}, (table) => ({
  relationshipIdx: index("idx_contractors_relationship").on(table.relationshipStatus),
  nameIdx: index("idx_contractors_name").on(table.companyName),
}));

export const constructionProjects = pgTable("construction_projects", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  projectName: text("project_name").notNull(),
  permitNumber: text("permit_number"),
  projectType: text("project_type").notNull(),
  address: text("address"),
  city: text("city").notNull(),
  state: text("state").notNull().default("ID"),
  zipCode: text("zip_code"),
  county: text("county"),
  latitude: decimal("latitude", { precision: 10, scale: 7 }),
  longitude: decimal("longitude", { precision: 10, scale: 7 }),
  buildingType: text("building_type"),
  buildingSqft: integer("building_sqft"),
  numberOfFloors: integer("number_of_floors"),
  numberOfUnits: integer("number_of_units"),
  buildingDescription: text("building_description"),
  permitDate: date("permit_date"),
  estimatedStartDate: date("estimated_start_date"),
  currentPhase: text("current_phase"),
  phaseUpdatedAt: timestamp("phase_updated_at"),
  estimatedDrywallDate: date("estimated_drywall_date"),
  estimatedFinishDate: date("estimated_finish_date"),
  estimatedCleanupStart: date("estimated_cleanup_start"),
  estimatedCleanupDurationDays: integer("estimated_cleanup_duration_days"),
  gcCompanyId: uuid("gc_company_id").references(() => contractors.id),
  gcCompanyName: text("gc_company_name"),
  gcContactName: text("gc_contact_name"),
  gcContactTitle: text("gc_contact_title"),
  gcContactEmail: text("gc_contact_email"),
  gcContactPhone: text("gc_contact_phone"),
  ownerCompany: text("owner_company"),
  ownerContact: text("owner_contact"),
  ownerPhone: text("owner_phone"),
  architectFirm: text("architect_firm"),
  architectContact: text("architect_contact"),
  cleanupType: text("cleanup_type").array(),
  cleanupNotes: text("cleanup_notes"),
  estimatedProjectValue: decimal("estimated_project_value", { precision: 12, scale: 2 }),
  estimatedCleanupValue: decimal("estimated_cleanup_value", { precision: 10, scale: 2 }),
  bidAmount: decimal("bid_amount", { precision: 10, scale: 2 }),
  awardedAmount: decimal("awarded_amount", { precision: 10, scale: 2 }),
  pipelineStage: text("pipeline_stage").default("discovered"),
  pipelineUpdatedAt: timestamp("pipeline_updated_at").defaultNow(),
  priority: text("priority").default("medium"),
  lostReason: text("lost_reason"),
  source: text("source"),
  sourceUrl: text("source_url"),
  sourceProjectId: text("source_project_id"),
  notes: text("notes"),
  planDocuments: text("plan_documents").array(),
  photos: text("photos").array(),
  tags: text("tags").array(),
}, (table) => ({
  cityIdx: index("idx_projects_city").on(table.city, table.state),
  phaseIdx: index("idx_projects_phase").on(table.currentPhase),
  pipelineIdx: index("idx_projects_pipeline").on(table.pipelineStage),
  gcIdx: index("idx_projects_gc").on(table.gcCompanyId),
  cleanupDateIdx: index("idx_projects_cleanup_date").on(table.estimatedCleanupStart),
}));

export const activityLog = pgTable("activity_log", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  projectId: uuid("project_id").references(() => constructionProjects.id, { onDelete: "cascade" }),
  contractorId: uuid("contractor_id").references(() => contractors.id, { onDelete: "cascade" }),
  activityType: text("activity_type").notNull(),
  subject: text("subject"),
  details: text("details"),
  outcome: text("outcome"),
  nextAction: text("next_action"),
  nextActionDate: date("next_action_date"),
  attachments: text("attachments").array(),
  completedBy: text("completed_by").default("Francisco"),
}, (table) => ({
  projectIdx: index("idx_activity_project").on(table.projectId),
  contractorIdx: index("idx_activity_contractor").on(table.contractorId),
}));

export const bidProposals = pgTable("bid_proposals", {
  id: uuid("id").defaultRandom().primaryKey(),
  projectId: uuid("project_id").references(() => constructionProjects.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  proposalNumber: text("proposal_number"),
  title: text("title"),
  status: text("status").default("draft"),
  version: integer("version").default(1),
  scopeItems: jsonb("scope_items").default([]),
  subtotal: decimal("subtotal", { precision: 10, scale: 2 }),
  taxAmount: decimal("tax_amount", { precision: 10, scale: 2 }),
  total: decimal("total", { precision: 10, scale: 2 }),
  additionalItems: jsonb("additional_items").default([]),
  validUntil: date("valid_until"),
  estimatedStartDate: date("estimated_start_date"),
  estimatedCompletionDate: date("estimated_completion_date"),
  paymentTerms: text("payment_terms").default("Net 30"),
  includesInsuranceCert: boolean("includes_insurance_cert").default(true),
  includesSafetyPlan: boolean("includes_safety_plan").default(false),
  pdfUrl: text("pdf_url"),
  submittedAt: timestamp("submitted_at"),
  acceptedAt: timestamp("accepted_at"),
  rejectedAt: timestamp("rejected_at"),
});

export const cleanupPricing = pgTable("cleanup_pricing", {
  id: uuid("id").defaultRandom().primaryKey(),
  buildingType: text("building_type").notNull(),
  cleanupPhase: text("cleanup_phase").notNull(),
  pricePerSqftLow: decimal("price_per_sqft_low", { precision: 6, scale: 4 }),
  pricePerSqftMid: decimal("price_per_sqft_mid", { precision: 6, scale: 4 }),
  pricePerSqftHigh: decimal("price_per_sqft_high", { precision: 6, scale: 4 }),
  sqftPerHourPerPerson: integer("sqft_per_hour_per_person"),
  notes: text("notes"),
  isActive: boolean("is_active").default(true),
});

export const discoveryQueue = pgTable("discovery_queue", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  sourceName: text("source_name").notNull(),
  sourceProjectId: text("source_project_id"),
  rawData: jsonb("raw_data"),
  projectName: text("project_name"),
  address: text("address"),
  city: text("city"),
  state: text("state"),
  projectType: text("project_type"),
  estimatedValue: decimal("estimated_value", { precision: 12, scale: 2 }),
  gcName: text("gc_name"),
  status: text("status").default("pending"),
  duplicateOfId: uuid("duplicate_of_id"),
  dismissedReason: text("dismissed_reason"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export const insertContractorSchema = createInsertSchema(contractors).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertProjectSchema = createInsertSchema(constructionProjects).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  pipelineUpdatedAt: true,
  phaseUpdatedAt: true,
});

export const insertActivitySchema = createInsertSchema(activityLog).omit({
  id: true,
  createdAt: true,
});

export const insertBidProposalSchema = createInsertSchema(bidProposals).omit({
  id: true,
  createdAt: true,
});

export const insertCleanupPricingSchema = createInsertSchema(cleanupPricing).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type Contractor = typeof contractors.$inferSelect;
export type InsertContractor = z.infer<typeof insertContractorSchema>;
export type ConstructionProject = typeof constructionProjects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Activity = typeof activityLog.$inferSelect;
export type InsertActivity = z.infer<typeof insertActivitySchema>;
export type BidProposal = typeof bidProposals.$inferSelect;
export type InsertBidProposal = z.infer<typeof insertBidProposalSchema>;
export type CleanupPricing = typeof cleanupPricing.$inferSelect;
export type InsertCleanupPricing = z.infer<typeof insertCleanupPricingSchema>;
export type DiscoveryQueueItem = typeof discoveryQueue.$inferSelect;

export const CONSTRUCTION_PHASES = [
  "pre_construction", "site_work", "foundation", "framing", "rough_in",
  "drywall", "interior_finishes", "exterior_finishes", "punch_list",
  "final_inspection", "complete"
] as const;

export const PIPELINE_STAGES = [
  "discovered", "researching", "gc_contacted", "plans_requested",
  "plans_received", "estimating", "bid_submitted", "bid_follow_up",
  "awarded", "in_progress", "completed", "lost", "dormant"
] as const;

export const BUILDING_TYPES = [
  "office", "medical", "retail", "apartment", "hotel", "warehouse",
  "school", "church", "government", "mixed_use", "industrial", "restaurant", "other"
] as const;

export const PRIORITY_LEVELS = ["hot", "high", "medium", "low"] as const;

export const CLEANUP_TYPES = [
  "rough_clean", "light_clean", "final_clean",
  "window_cleaning", "pressure_washing", "floor_care"
] as const;

export const RELATIONSHIP_STATUSES = [
  "prospect", "contacted", "active_partner", "past_partner", "cold"
] as const;

export const ACTIVITY_TYPES = [
  "email", "phone_call", "site_visit", "meeting", "bid_submitted",
  "plans_received", "follow_up", "note", "drive_by", "stage_change"
] as const;

export const PROJECT_SOURCES = [
  "permit_database", "plan_room", "google_search", "referral",
  "drive_by", "cold_call", "network", "construction_wire",
  "construction_monitor", "shovels", "construct_a_lead", "manual"
] as const;
