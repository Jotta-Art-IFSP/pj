import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CheckupService {

  constructor(private router: Router) {
  }

  navegarParaLogin() {
    this.router.navigateByUrl('/login');
  }
}
