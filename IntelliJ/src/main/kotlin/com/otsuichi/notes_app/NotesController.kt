package com.otsuichi.notes_app

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class NotesController(@Autowired val notesRepository: NotesRepository) {

    @GetMapping("/api/notes", "/api/notes/")
    fun getNotes(): Array<Note> {
        return notesRepository.getNotes()
    }

    @GetMapping("/api/notes/{id}", "/api/notes/{id}/")
    fun getNote(@PathVariable("id") id: Long): Note {
        return notesRepository.getNote(id)
    }

    @PostMapping("/api/notes", "/api/notes/")
    fun postNotes(@RequestBody noteRequest: NoteRequest) {
        notesRepository.postNote(noteRequest)
    }

    @DeleteMapping("/api/notes/{id}", "/api/notes/{id}/")
    fun deleteNote(@PathVariable("id") id: Long) {
        notesRepository.deleteNote(id)
    }
}