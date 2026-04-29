import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`media\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`alt\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric
  );
  `)
  await db.run(sql`CREATE INDEX \`media_updated_at_idx\` ON \`media\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`media_created_at_idx\` ON \`media\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`media_filename_idx\` ON \`media\` (\`filename\`);`)
  await db.run(sql`CREATE TABLE \`test_categories\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`generate_slug\` integer DEFAULT true,
  	\`slug\` text NOT NULL,
  	\`display_order\` numeric DEFAULT 1,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`test_categories_slug_idx\` ON \`test_categories\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`test_categories_updated_at_idx\` ON \`test_categories\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`test_categories_created_at_idx\` ON \`test_categories\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`tests\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`badge\` text,
  	\`generate_slug\` integer DEFAULT true,
  	\`slug\` text NOT NULL,
  	\`description\` text,
  	\`price\` numeric NOT NULL,
  	\`individual_sale\` integer DEFAULT false,
  	\`test_category_id\` text(36),
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`test_category_id\`) REFERENCES \`test_categories\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`tests_badge_idx\` ON \`tests\` (\`badge\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`tests_slug_idx\` ON \`tests\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`tests_test_category_idx\` ON \`tests\` (\`test_category_id\`);`)
  await db.run(sql`CREATE INDEX \`tests_updated_at_idx\` ON \`tests\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`tests_created_at_idx\` ON \`tests\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`package_types_badges\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text(36) NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`custom_icon\` text,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`package_types\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`package_types_badges_order_idx\` ON \`package_types_badges\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`package_types_badges_parent_id_idx\` ON \`package_types_badges\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`package_types\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`generate_slug\` integer DEFAULT true,
  	\`slug\` text NOT NULL,
  	\`description\` text,
  	\`headline\` text,
  	\`subheadline\` text,
  	\`color\` text,
  	\`icon\` text,
  	\`badge\` text,
  	\`thumbnail_id\` text(36),
  	\`enable_filtering\` integer DEFAULT false,
  	\`display_order\` numeric DEFAULT 1,
  	\`is_active\` integer DEFAULT true,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`thumbnail_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`package_types_slug_idx\` ON \`package_types\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`package_types_thumbnail_idx\` ON \`package_types\` (\`thumbnail_id\`);`)
  await db.run(sql`CREATE INDEX \`package_types_updated_at_idx\` ON \`package_types\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`package_types_created_at_idx\` ON \`package_types\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`package_categories\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`generate_slug\` integer DEFAULT true,
  	\`slug\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`package_categories_slug_idx\` ON \`package_categories\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`package_categories_updated_at_idx\` ON \`package_categories\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`package_categories_created_at_idx\` ON \`package_categories\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`packages\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`generate_slug\` integer DEFAULT true,
  	\`slug\` text NOT NULL,
  	\`description\` text,
  	\`price\` numeric NOT NULL,
  	\`discounted_price\` numeric,
  	\`badge\` text,
  	\`thumbnail_id\` text(36),
  	\`color\` text,
  	\`display_order\` numeric DEFAULT 1,
  	\`is_active\` integer DEFAULT true,
  	\`package_type_id\` text(36),
  	\`package_category_id\` text(36),
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`thumbnail_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`package_type_id\`) REFERENCES \`package_types\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`package_category_id\`) REFERENCES \`package_categories\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`packages_slug_idx\` ON \`packages\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`packages_thumbnail_idx\` ON \`packages\` (\`thumbnail_id\`);`)
  await db.run(sql`CREATE INDEX \`packages_package_type_idx\` ON \`packages\` (\`package_type_id\`);`)
  await db.run(sql`CREATE INDEX \`packages_package_category_idx\` ON \`packages\` (\`package_category_id\`);`)
  await db.run(sql`CREATE INDEX \`packages_updated_at_idx\` ON \`packages\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`packages_created_at_idx\` ON \`packages\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`packages_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` text(36) NOT NULL,
  	\`path\` text NOT NULL,
  	\`tests_id\` text(36),
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`packages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`tests_id\`) REFERENCES \`tests\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`packages_rels_order_idx\` ON \`packages_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`packages_rels_parent_idx\` ON \`packages_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`packages_rels_path_idx\` ON \`packages_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`packages_rels_tests_id_idx\` ON \`packages_rels\` (\`tests_id\`);`)
  await db.run(sql`CREATE TABLE \`blog_categories\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`generate_slug\` integer DEFAULT true,
  	\`slug\` text NOT NULL,
  	\`description\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`blog_categories_slug_idx\` ON \`blog_categories\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`blog_categories_updated_at_idx\` ON \`blog_categories\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`blog_categories_created_at_idx\` ON \`blog_categories\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`blog_posts_tags\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text(36) NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`tag\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`blog_posts\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`blog_posts_tags_order_idx\` ON \`blog_posts_tags\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_tags_parent_id_idx\` ON \`blog_posts_tags\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`blog_posts_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text(36) NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`blog_posts\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`blog_posts_faq_order_idx\` ON \`blog_posts_faq\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_faq_parent_id_idx\` ON \`blog_posts_faq\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`blog_posts\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`generate_slug\` integer DEFAULT true,
  	\`slug\` text NOT NULL,
  	\`featured_image_id\` text(36),
  	\`excerpt\` text,
  	\`content\` text NOT NULL,
  	\`author\` text,
  	\`category_id\` text(36),
  	\`published_at\` text,
  	\`status\` text DEFAULT 'draft',
  	\`meta_meta_title\` text,
  	\`meta_meta_description\` text,
  	\`meta_meta_image_id\` text(36),
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`featured_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`category_id\`) REFERENCES \`blog_categories\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`meta_meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`blog_posts_slug_idx\` ON \`blog_posts\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_featured_image_idx\` ON \`blog_posts\` (\`featured_image_id\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_category_idx\` ON \`blog_posts\` (\`category_id\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_meta_meta_meta_image_idx\` ON \`blog_posts\` (\`meta_meta_image_id\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_updated_at_idx\` ON \`blog_posts\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`blog_posts_created_at_idx\` ON \`blog_posts\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`consultation_requests\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`full_name\` text NOT NULL,
  	\`phone_number\` text NOT NULL,
  	\`consultation_type\` text NOT NULL,
  	\`slot_id\` text(36) NOT NULL,
  	\`status\` text DEFAULT 'pending',
  	\`reference_number\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`slot_id\`) REFERENCES \`consultation_time_slots\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`consultation_requests_slot_idx\` ON \`consultation_requests\` (\`slot_id\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`consultation_requests_reference_number_idx\` ON \`consultation_requests\` (\`reference_number\`);`)
  await db.run(sql`CREATE INDEX \`consultation_requests_updated_at_idx\` ON \`consultation_requests\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`consultation_requests_created_at_idx\` ON \`consultation_requests\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`consultation_time_slots\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`date\` text NOT NULL,
  	\`start_time\` text NOT NULL,
  	\`end_time\` text NOT NULL,
  	\`max_capacity\` numeric DEFAULT 1 NOT NULL,
  	\`auto_close_when_full\` integer DEFAULT false,
  	\`availability_status\` text DEFAULT 'available',
  	\`booked_count\` numeric,
  	\`remaining_capacity\` numeric,
  	\`display_title\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`consultation_time_slots_date_idx\` ON \`consultation_time_slots\` (\`date\`);`)
  await db.run(sql`CREATE INDEX \`consultation_time_slots_updated_at_idx\` ON \`consultation_time_slots\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`consultation_time_slots_created_at_idx\` ON \`consultation_time_slots\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`consultation_schedule_templates_schedule_time_slots\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`start_time\` text NOT NULL,
  	\`end_time\` text NOT NULL,
  	\`max_capacity\` numeric DEFAULT 1 NOT NULL,
  	\`auto_close_when_full\` integer DEFAULT false,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`consultation_schedule_templates_schedule\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`consultation_schedule_templates_schedule_time_slots_order_idx\` ON \`consultation_schedule_templates_schedule_time_slots\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`consultation_schedule_templates_schedule_time_slots_parent_id_idx\` ON \`consultation_schedule_templates_schedule_time_slots\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`consultation_schedule_templates_schedule\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text(36) NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`day_of_week\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`consultation_schedule_templates\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`consultation_schedule_templates_schedule_order_idx\` ON \`consultation_schedule_templates_schedule\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`consultation_schedule_templates_schedule_parent_id_idx\` ON \`consultation_schedule_templates_schedule\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`consultation_schedule_templates\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`start_date\` text NOT NULL,
  	\`end_date\` text NOT NULL,
  	\`last_generated_at\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`consultation_schedule_templates_updated_at_idx\` ON \`consultation_schedule_templates\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`consultation_schedule_templates_created_at_idx\` ON \`consultation_schedule_templates\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`consultations_prescriptions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text(36) NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`medication_name\` text NOT NULL,
  	\`dosage\` text,
  	\`frequency\` text,
  	\`duration\` text,
  	\`instructions\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`consultations\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`consultations_prescriptions_order_idx\` ON \`consultations_prescriptions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`consultations_prescriptions_parent_id_idx\` ON \`consultations_prescriptions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`consultations_attachments\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text(36) NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`file_id\` text(36),
  	\`description\` text,
  	FOREIGN KEY (\`file_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`consultations\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`consultations_attachments_order_idx\` ON \`consultations_attachments\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`consultations_attachments_parent_id_idx\` ON \`consultations_attachments\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`consultations_attachments_file_idx\` ON \`consultations_attachments\` (\`file_id\`);`)
  await db.run(sql`CREATE TABLE \`consultations\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`consultation_request_id\` text(36) NOT NULL,
  	\`status\` text DEFAULT 'scheduled',
  	\`chief_complaint\` text,
  	\`notes\` text,
  	\`diagnosis\` text,
  	\`treatment_plan\` text,
  	\`follow_up_required\` integer DEFAULT false,
  	\`follow_up_date\` text,
  	\`completed_at\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`consultation_request_id\`) REFERENCES \`consultation_requests\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`consultations_consultation_request_idx\` ON \`consultations\` (\`consultation_request_id\`);`)
  await db.run(sql`CREATE INDEX \`consultations_updated_at_idx\` ON \`consultations\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`consultations_created_at_idx\` ON \`consultations\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`home_visit_requests\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`full_name\` text NOT NULL,
  	\`phone_number\` text NOT NULL,
  	\`slot_id\` text(36) NOT NULL,
  	\`status\` text DEFAULT 'pending',
  	\`reference_number\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`slot_id\`) REFERENCES \`home_visit_time_slots\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`home_visit_requests_slot_idx\` ON \`home_visit_requests\` (\`slot_id\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`home_visit_requests_reference_number_idx\` ON \`home_visit_requests\` (\`reference_number\`);`)
  await db.run(sql`CREATE INDEX \`home_visit_requests_updated_at_idx\` ON \`home_visit_requests\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`home_visit_requests_created_at_idx\` ON \`home_visit_requests\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`home_visit_time_slots\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`date\` text NOT NULL,
  	\`start_time\` text NOT NULL,
  	\`end_time\` text NOT NULL,
  	\`max_capacity\` numeric DEFAULT 1 NOT NULL,
  	\`auto_close_when_full\` integer DEFAULT false,
  	\`availability_status\` text DEFAULT 'available',
  	\`booked_count\` numeric,
  	\`remaining_capacity\` numeric,
  	\`display_title\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`home_visit_time_slots_date_idx\` ON \`home_visit_time_slots\` (\`date\`);`)
  await db.run(sql`CREATE INDEX \`home_visit_time_slots_updated_at_idx\` ON \`home_visit_time_slots\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`home_visit_time_slots_created_at_idx\` ON \`home_visit_time_slots\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`home_visit_schedule_templates_schedule_time_slots\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`start_time\` text NOT NULL,
  	\`end_time\` text NOT NULL,
  	\`max_capacity\` numeric DEFAULT 1 NOT NULL,
  	\`auto_close_when_full\` integer DEFAULT false,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`home_visit_schedule_templates_schedule\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`home_visit_schedule_templates_schedule_time_slots_order_idx\` ON \`home_visit_schedule_templates_schedule_time_slots\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`home_visit_schedule_templates_schedule_time_slots_parent_id_idx\` ON \`home_visit_schedule_templates_schedule_time_slots\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`home_visit_schedule_templates_schedule\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text(36) NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`day_of_week\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`home_visit_schedule_templates\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`home_visit_schedule_templates_schedule_order_idx\` ON \`home_visit_schedule_templates_schedule\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`home_visit_schedule_templates_schedule_parent_id_idx\` ON \`home_visit_schedule_templates_schedule\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`home_visit_schedule_templates\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`start_date\` text NOT NULL,
  	\`end_date\` text NOT NULL,
  	\`last_generated_at\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`home_visit_schedule_templates_updated_at_idx\` ON \`home_visit_schedule_templates\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`home_visit_schedule_templates_created_at_idx\` ON \`home_visit_schedule_templates\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`home_visits_prescriptions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text(36) NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`medication_name\` text NOT NULL,
  	\`dosage\` text,
  	\`frequency\` text,
  	\`duration\` text,
  	\`instructions\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`home_visits\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`home_visits_prescriptions_order_idx\` ON \`home_visits_prescriptions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`home_visits_prescriptions_parent_id_idx\` ON \`home_visits_prescriptions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`home_visits_attachments\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text(36) NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`file_id\` text(36),
  	\`description\` text,
  	FOREIGN KEY (\`file_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`home_visits\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`home_visits_attachments_order_idx\` ON \`home_visits_attachments\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`home_visits_attachments_parent_id_idx\` ON \`home_visits_attachments\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`home_visits_attachments_file_idx\` ON \`home_visits_attachments\` (\`file_id\`);`)
  await db.run(sql`CREATE TABLE \`home_visits\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`home_visit_request_id\` text(36) NOT NULL,
  	\`status\` text DEFAULT 'scheduled',
  	\`chief_complaint\` text,
  	\`notes\` text,
  	\`diagnosis\` text,
  	\`treatment_plan\` text,
  	\`follow_up_required\` integer DEFAULT false,
  	\`follow_up_date\` text,
  	\`completed_at\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`home_visit_request_id\`) REFERENCES \`home_visit_requests\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`home_visits_home_visit_request_idx\` ON \`home_visits\` (\`home_visit_request_id\`);`)
  await db.run(sql`CREATE INDEX \`home_visits_updated_at_idx\` ON \`home_visits\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`home_visits_created_at_idx\` ON \`home_visits\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`contact_messages\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`full_name\` text NOT NULL,
  	\`phone_number\` text NOT NULL,
  	\`message\` text,
  	\`status\` text DEFAULT 'new',
  	\`notes\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`contact_messages_updated_at_idx\` ON \`contact_messages\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`contact_messages_created_at_idx\` ON \`contact_messages\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_kv\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`key\` text NOT NULL,
  	\`data\` text NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`payload_kv_key_idx\` ON \`payload_kv\` (\`key\`);`)
  await db.run(sql`CREATE TABLE \`users_sessions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text(36) NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`created_at\` text,
  	\`expires_at\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_sessions_order_idx\` ON \`users_sessions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_sessions_parent_id_idx\` ON \`users_sessions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`users\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`email\` text NOT NULL,
  	\`reset_password_token\` text,
  	\`reset_password_expiration\` text,
  	\`salt\` text,
  	\`hash\` text,
  	\`login_attempts\` numeric DEFAULT 0,
  	\`lock_until\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`global_slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_global_slug_idx\` ON \`payload_locked_documents\` (\`global_slug\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_updated_at_idx\` ON \`payload_locked_documents\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_created_at_idx\` ON \`payload_locked_documents\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` text(36) NOT NULL,
  	\`path\` text NOT NULL,
  	\`media_id\` text(36),
  	\`test_categories_id\` text(36),
  	\`tests_id\` text(36),
  	\`package_types_id\` text(36),
  	\`package_categories_id\` text(36),
  	\`packages_id\` text(36),
  	\`blog_categories_id\` text(36),
  	\`blog_posts_id\` text(36),
  	\`consultation_requests_id\` text(36),
  	\`consultation_time_slots_id\` text(36),
  	\`consultation_schedule_templates_id\` text(36),
  	\`consultations_id\` text(36),
  	\`home_visit_requests_id\` text(36),
  	\`home_visit_time_slots_id\` text(36),
  	\`home_visit_schedule_templates_id\` text(36),
  	\`home_visits_id\` text(36),
  	\`contact_messages_id\` text(36),
  	\`users_id\` text(36),
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`test_categories_id\`) REFERENCES \`test_categories\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`tests_id\`) REFERENCES \`tests\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`package_types_id\`) REFERENCES \`package_types\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`package_categories_id\`) REFERENCES \`package_categories\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`packages_id\`) REFERENCES \`packages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`blog_categories_id\`) REFERENCES \`blog_categories\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`blog_posts_id\`) REFERENCES \`blog_posts\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`consultation_requests_id\`) REFERENCES \`consultation_requests\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`consultation_time_slots_id\`) REFERENCES \`consultation_time_slots\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`consultation_schedule_templates_id\`) REFERENCES \`consultation_schedule_templates\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`consultations_id\`) REFERENCES \`consultations\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`home_visit_requests_id\`) REFERENCES \`home_visit_requests\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`home_visit_time_slots_id\`) REFERENCES \`home_visit_time_slots\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`home_visit_schedule_templates_id\`) REFERENCES \`home_visit_schedule_templates\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`home_visits_id\`) REFERENCES \`home_visits\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`contact_messages_id\`) REFERENCES \`contact_messages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_test_categories_id_idx\` ON \`payload_locked_documents_rels\` (\`test_categories_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_tests_id_idx\` ON \`payload_locked_documents_rels\` (\`tests_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_package_types_id_idx\` ON \`payload_locked_documents_rels\` (\`package_types_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_package_categories_id_idx\` ON \`payload_locked_documents_rels\` (\`package_categories_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_packages_id_idx\` ON \`payload_locked_documents_rels\` (\`packages_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_blog_categories_id_idx\` ON \`payload_locked_documents_rels\` (\`blog_categories_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_blog_posts_id_idx\` ON \`payload_locked_documents_rels\` (\`blog_posts_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_consultation_requests_id_idx\` ON \`payload_locked_documents_rels\` (\`consultation_requests_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_consultation_time_slots_id_idx\` ON \`payload_locked_documents_rels\` (\`consultation_time_slots_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_consultation_schedule_temp_idx\` ON \`payload_locked_documents_rels\` (\`consultation_schedule_templates_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_consultations_id_idx\` ON \`payload_locked_documents_rels\` (\`consultations_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_home_visit_requests_id_idx\` ON \`payload_locked_documents_rels\` (\`home_visit_requests_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_home_visit_time_slots_id_idx\` ON \`payload_locked_documents_rels\` (\`home_visit_time_slots_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_home_visit_schedule_templa_idx\` ON \`payload_locked_documents_rels\` (\`home_visit_schedule_templates_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_home_visits_id_idx\` ON \`payload_locked_documents_rels\` (\`home_visits_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_contact_messages_id_idx\` ON \`payload_locked_documents_rels\` (\`contact_messages_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`key\` text,
  	\`value\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_key_idx\` ON \`payload_preferences\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_updated_at_idx\` ON \`payload_preferences\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_created_at_idx\` ON \`payload_preferences\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` text(36) NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` text(36),
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_preferences\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_order_idx\` ON \`payload_preferences_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_parent_idx\` ON \`payload_preferences_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_path_idx\` ON \`payload_preferences_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_users_id_idx\` ON \`payload_preferences_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_migrations\` (
  	\`id\` text(36) PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`batch\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_migrations_updated_at_idx\` ON \`payload_migrations\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_migrations_created_at_idx\` ON \`payload_migrations\` (\`created_at\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`media\`;`)
  await db.run(sql`DROP TABLE \`test_categories\`;`)
  await db.run(sql`DROP TABLE \`tests\`;`)
  await db.run(sql`DROP TABLE \`package_types_badges\`;`)
  await db.run(sql`DROP TABLE \`package_types\`;`)
  await db.run(sql`DROP TABLE \`package_categories\`;`)
  await db.run(sql`DROP TABLE \`packages\`;`)
  await db.run(sql`DROP TABLE \`packages_rels\`;`)
  await db.run(sql`DROP TABLE \`blog_categories\`;`)
  await db.run(sql`DROP TABLE \`blog_posts_tags\`;`)
  await db.run(sql`DROP TABLE \`blog_posts_faq\`;`)
  await db.run(sql`DROP TABLE \`blog_posts\`;`)
  await db.run(sql`DROP TABLE \`consultation_requests\`;`)
  await db.run(sql`DROP TABLE \`consultation_time_slots\`;`)
  await db.run(sql`DROP TABLE \`consultation_schedule_templates_schedule_time_slots\`;`)
  await db.run(sql`DROP TABLE \`consultation_schedule_templates_schedule\`;`)
  await db.run(sql`DROP TABLE \`consultation_schedule_templates\`;`)
  await db.run(sql`DROP TABLE \`consultations_prescriptions\`;`)
  await db.run(sql`DROP TABLE \`consultations_attachments\`;`)
  await db.run(sql`DROP TABLE \`consultations\`;`)
  await db.run(sql`DROP TABLE \`home_visit_requests\`;`)
  await db.run(sql`DROP TABLE \`home_visit_time_slots\`;`)
  await db.run(sql`DROP TABLE \`home_visit_schedule_templates_schedule_time_slots\`;`)
  await db.run(sql`DROP TABLE \`home_visit_schedule_templates_schedule\`;`)
  await db.run(sql`DROP TABLE \`home_visit_schedule_templates\`;`)
  await db.run(sql`DROP TABLE \`home_visits_prescriptions\`;`)
  await db.run(sql`DROP TABLE \`home_visits_attachments\`;`)
  await db.run(sql`DROP TABLE \`home_visits\`;`)
  await db.run(sql`DROP TABLE \`contact_messages\`;`)
  await db.run(sql`DROP TABLE \`payload_kv\`;`)
  await db.run(sql`DROP TABLE \`users_sessions\`;`)
  await db.run(sql`DROP TABLE \`users\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_migrations\`;`)
}
