# Location Related Entities

A JSON representation of the entities defined on hasura (postres) database tables

```JSON
    "countries": {
        "id": "uuid",
        "name": "uuid"
    }

    "state_provinces": {
        "id": "uuid",
        "country_id": "FK_uuid",
        "name": "text"
    }

    "cities": {
        "id": "uuid",
        "country_id": "FK_uuid",
        "state_province_id": "FK_uuid",
        "name": "text"
    }
```
