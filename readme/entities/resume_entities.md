# Resume Related Entities

A JSON representation of the entities defined on hasura (postres) database tables

```JSON
    "resumes": {
        "id": "uuid",
        "user_id": "FK_uuid",
        "first_name": "text",
        "last_name": "text",
        "phone_number": "text",
        "email": "text",
        "salary_expec": "text",
        "country": "text",                          // default to Canada
        "state_provice": "text",                    // default to Ontario
        "city": "text"                              // user selected city ie Scarborough, Toronto ...
    }

    "employment_types": {
        "id": "uuid",
        "type": "text"                              // Full-time, Part-time, Contract ...
    }

    "resume_employment_types": {
        "id": "uuid",
        "user_resume_id": "FK_uuid",
        "employment_type_id": "FK_uuid"
    }

    "resume_files": {
        "id": "uuid",
        "user_resume_id": "FK_uuid",
        "mimetype": "text",
        "original_name": "text",
        "file_path": "text"
    }
```
