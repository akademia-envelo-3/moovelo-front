import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error404Component implements OnInit {
  private router = inject(Router);

  goBack(): void {
    setTimeout(() => {
      this.router.navigateByUrl('');
    }, 5000);
  }

  ngOnInit(): void {
    this.goBack();
  }
}
