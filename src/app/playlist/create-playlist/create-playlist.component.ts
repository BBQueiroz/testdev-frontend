import { Component, inject } from '@angular/core';

import { FormBuilder,FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrl: './create-playlist.component.css'
})
export class CreatePlaylistComponent {

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    playlistNome: null,
    descricao: [null, Validators.required],
    musicas: this.fb.array([
      this.createMusicFormGroup()
    ])

  });

  hasUnitNumber = false;

  createMusicFormGroup(): FormGroup {
    return this.fb.group({
      titulo: [''],
      artista: [''],
      album: [''],
      ano: [''],
      genero: ['']
    });
  }

  addMusic() {
    const musicArray = this.addressForm.get('musicas') as FormArray;
    musicArray.push(this.createMusicFormGroup());
  }
  
  get musicasArray(): FormArray {
    return this.addressForm.get('musicas') as FormArray;
  }

  

  onSubmit(): void {
    alert('Thanks!');
  }
  
}
