```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The browser catches the form submit event, prevents the default reload, creates a new note object, adds it locally to the notes list, and re-renders the UI instantly

    browser->>server: POST [https://studies.cs.helsinki.fi/exampleapp/new_note_spa](https://studies.cs.helsinki.fi/exampleapp/new_note_spa)
    activate server
    Note over server: Server receives the JSON data containing the new note,<br/>and appends it to the 'notes' array
    server-->>browser: HTTP status code 201 Created
    deactivate server

    Note right of browser: The browser receives the success confirmation, no further page reloads or data requests needed