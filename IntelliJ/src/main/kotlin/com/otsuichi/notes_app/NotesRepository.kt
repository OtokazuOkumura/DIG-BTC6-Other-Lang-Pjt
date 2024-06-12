package com.otsuichi.notes_app

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.stereotype.Repository
import org.springframework.web.server.ResponseStatusException
import java.sql.ResultSet
import org.springframework.dao.DataAccessException;

class NoteRowMapper: RowMapper<Note> {
    override fun mapRow(rs: ResultSet, rowNum: Int): Note {
        return Note(rs.getLong(1), rs.getString(2), rs.getTimestamp(3))
    }
}

@Repository
class NotesRepository(@Autowired val jdbcTemplate: JdbcTemplate) {

    fun getNotes(): Array<Note> {
        val noteRowMapper = NoteRowMapper()
        val notes = jdbcTemplate.query("SELECT * FROM notes;", noteRowMapper)
        return notes.toTypedArray()
    }

    fun getNote(id: Long): Note {
        val noteRowMapper = NoteRowMapper()
        val notes = jdbcTemplate.query("SELECT * FROM notes WHERE id = $id;", noteRowMapper)
        if (notes.size <= 0) {
            throw ResponseStatusException(HttpStatus.NOT_FOUND)
        }
        return notes.toTypedArray()[0]
    }

    fun postNote(noteRequest: NoteRequest) {
        val updatedCount = jdbcTemplate.update("INSERT INTO notes (notetext, lastupdatedtime) VALUES (?, ?);", noteRequest.notetext, noteRequest.lastupdatedtime)
        if (updatedCount <= 0) {
            throw ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    fun deleteNote(id: Long) {
        val updatedCount = jdbcTemplate.update("DELETE FROM notes WHERE id = ?", id)
        if (updatedCount <= 0) {
            throw ResponseStatusException(HttpStatus.NOT_FOUND)
        }
    }
}