import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { from, Observable, of } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { ListResult } from '@angular/fire/compat/storage/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private afAuth: AngularFireAuth,private db: AngularFireDatabase,private storage: AngularFireStorage) {

  }

  getImages(): Observable<string[]> {
    const ref = this.storage.ref('married');
    return from(ref.listAll()).pipe(
      switchMap(result => {
        const urls$ = result.items.map(item => item.getDownloadURL());
        return urls$.length ? from(Promise.all(urls$)) : of([]);
      })
    );
  }

   //method to retrieve download url


    // Metodo per effettuare l'accesso con email e password
  loginWithEmail(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Metodo per effettuare il logout
  logout() {
    return this.afAuth.signOut();
  }
  }

