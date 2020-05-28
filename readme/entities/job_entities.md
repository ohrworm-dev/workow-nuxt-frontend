# Job Related Entities

A JSON representation of the entities defined on hasura (postres) database tables

```JSON
    "jobs": {
        "id": "uuid",
        "title": "text",
        "description": "text",
        "salary": "text",
        "hours": "text",
        "url": "text",
        "country": "text",                          // default to Canada
        "state_provice": "text",                    // default to Ontario
        "city": "text",                              // user selected city ie Scarborough, Toronto ...
        "posting_date": "datetime",
        "expiry_date": "datetime",
    }

    "job_applicants": {
        "id": "uuid",
        "resume_id": "FK_uuid",
        "job_id": "FK_uuid",
        "timestamp": "datetime"
    }

    "user_saved_jobs": {
        "id": "uuid",
        "job_id": "FK_uuid",
        "user_id": "FK_uuid"
    }
```
