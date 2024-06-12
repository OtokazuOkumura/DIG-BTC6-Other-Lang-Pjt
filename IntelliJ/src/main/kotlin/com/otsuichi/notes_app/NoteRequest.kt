package com.otsuichi.notes_app

import java.sql.Timestamp

data class NoteRequest(val notetext: String, val lastupdatedtime: Timestamp)
