import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { RegisterService } from '../../../services';
import { User }  from '../../../models';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    valForm: FormGroup;
    passwordForm: FormGroup;
    newUserData: User =new User();

    constructor(public settings: SettingsService, fb: FormBuilder,
                private registerService:RegisterService
    
    ) {

        let password = new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]{6,10}$')]));
        let certainPassword = new FormControl('', CustomValidators.equalTo(password));

        this.passwordForm = fb.group({
            'password': password,
            'confirmPassword': certainPassword
        });

        this.valForm = fb.group({
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'accountagreed': [null, Validators.required],
            'passwordGroup': this.passwordForm
        });
    }

    submitForm($ev, value: any) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        for (let c in this.passwordForm.controls) {
            this.passwordForm.controls[c].markAsTouched();
        }

        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(value);
            console.log('input is '+ value.email);
            console.log('input is '+ value.passwordGroup.password);
            this.newUserData.email=value.email;
            this.newUserData.password = value.passwordGroup.password;
            console.log('On Save COCDBData: ', this.newUserData);
          this.registerService.register(this.newUserData)
        .subscribe((result)=>{
        //   console.log('New COCDB data created: ', this.newCOCDBdata.dbName);
          console.log('newResult= ', result);
        },
        err => {
        var message = JSON.parse(err._body);
        console.log(message)
        // this.toastr.error(message,'Create location note failed!')
        })
        }
    }

    ngOnInit() {
    }

}
