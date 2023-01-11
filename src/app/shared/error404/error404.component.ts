import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error404Component implements OnInit {
  constructor(private router: Router) {}

  goBack(): void {
    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 6000);
  }

  ngOnInit(): void {
    this.goBack();
  }
}
