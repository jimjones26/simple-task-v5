CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`status` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`password_hash` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_username_unique` ON `users` (`username`);