# User Entity Models

A JSON representation of the entities defined on hasura (postres) database tables

``` JSON
    "users": {
        "id": "uuid",
        "email": "text",
        "password_hash": "text",
        "confirm_email": "boolean",         // Users whom create a local account are required to validate via email sent by the server
        "confirm_key": "text",              // Randomly generated key used to validate an email confirmation request
        "last_login": "datetime",           // Records last successful user login
        "locked_out": "boolean",            // Determines if user is locked out
        "locked_out_end": "datetime",       // If x amount of login attempts failed the server locks the user account until the locked out end time
        "failed_login_attempts": "number"   // Number of failed login attempts since last locked out time
    }

    "roles": {
        "id": "uuid",
        "role_name": "text"                 // admin, moderator, job_seeker, employer
    }

    "user_roles": {
        "id": "uuid",
        "user_id": "FK_uuid",
        "role_id": "FK_uuid"
    }

    "claims": {
        "id": "uuid",
        "claim_name": "text"                // edit_user_role, ...
    }

    "user_claims": {
        "id": "uuid",
        "user_id": "FK_uuid",
        "claim_id": "FK_uuid"
    }
```
