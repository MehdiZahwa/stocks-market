import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-private-section3',
  templateUrl: './private-section3.component.html',
  styleUrls: ['./private-section3.component.scss'],
})
export class PrivateSection3Component implements OnInit {
  safeURL: any;

  constructor(private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/5otaBKsz7k4?start=63'
    );
  }

  ngOnInit(): void {}
}
