import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})
export class MarketplaceComponent implements OnInit {
    albums:  FirebaseListObservable<any[]>;
    currentRoute: string = this.router.url;
    constructor(private router: Router, private albumService: AlbumService) {}

    ngOnInit(){
      this.albums = this.albumService.getAlbums();

    }
    goToDetailPage(clickedAlbum){
      //this.router.navigate(['albums', clickedAlbum.id]);
      this.router.navigate(['albums', clickedAlbum.$key]);
    }

}
