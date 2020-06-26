import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  errMessage: string;
  message: string;
  matchText: string;
  posts: any[];
  postForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    privacy: new FormControl('PUBLIC'),
  });

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.cleanMessages();
    this.http.get<any>(`${environment.endpoints['posts-api']}`, {
      headers: {Authorization: `Bearer ${document.cookie.split('token=')[1]}`}
    }).subscribe(posts => {
      this.posts = posts;
    }, err => {
      console.log(err);
      this.errMessage = err.message;
    });
  }

  createPost() {
    this.cleanMessages();
    const {title, description, privacy} = this.postForm.value;
    this.http.post<any>(`${environment.endpoints['posts-api']}/create`, {title, description, privacy}, {
      headers: {Authorization: `Bearer ${document.cookie.split('token=')[1]}`}
    }).subscribe(() => {
      this.fetchPosts();
      this.message = 'Post created successfully';
    }, err => {
      console.log(err);
      this.errMessage = 'Invalid values to create a Post';
    });
  }

  searchText() {
    this.cleanMessages();
    const params = new URLSearchParams();
    if (this.matchText) {
      params.append('matchText', this.matchText);
    }
    this.http.get<any>(`${environment.endpoints['posts-api']}?${params.toString()}`, {
      headers: {Authorization: `Bearer ${document.cookie.split('token=')[1]}`}
    }).subscribe(posts => {
      this.posts = posts;
    }, err => {
      console.log(err);
      this.errMessage = err.message;
    });
  }

  deletePost(id) {
    this.cleanMessages();
    this.http.delete<any>(`${environment.endpoints['posts-api']}/${id}`, {
      headers: {Authorization: `Bearer ${document.cookie.split('token=')[1]}`}
    }).subscribe(() => {
      this.fetchPosts();
      this.message = 'Post deleted successfully';
    }, err => {
      console.log(err);
      this.errMessage = err.error;
    });
  }

  cleanMessages() {
    this.errMessage = '';
    this.message = '';
  }
}
