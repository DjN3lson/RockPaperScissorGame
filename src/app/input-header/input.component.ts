import { Component } from '@angular/core';
import { DataService} from "../data.service";
import {NgModule} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  userChoice: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  play() {
    this.dataService.setUserChoice(this.userChoice);
    this.router.navigate(['/result']);
  }
}
