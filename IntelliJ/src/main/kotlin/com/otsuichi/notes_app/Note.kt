package com.otsuichi.notes_app

import java.sql.Timestamp

data class Note(val id: Long, val notetext: String, val lastupdatedtime: Timestamp)
