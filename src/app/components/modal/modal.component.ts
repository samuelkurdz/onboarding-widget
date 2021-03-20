import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {State} from '../../models/state.model';
import Nigeria from '../../utils/states-data';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'renmoney-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();

  displayedFormIndex = 0;
  eligibilityForm: FormGroup;
  personalForm: FormGroup;
  employerForm: FormGroup;

  statesInNigeria: State[];
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.statesInNigeria = Nigeria;
  }

  ngOnInit(): void {
    this.initiateForms();
  }

  initiateForms(): void {
    this.initiateEligibilityForm();
    this.initiatePersonalForm();
    this.initiateEmployerForm();
  }

  initiateEligibilityForm(): void {
    this.eligibilityForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      DOB: [null, Validators.required],
      employmentState: [null, Validators.required],
      gender: [null, Validators.required],
      phone: [null, Validators.required],
      state: [null, Validators.required],
      lga: [null, Validators.required],
      bvn: [null, Validators.required],
    });
  }

  initiatePersonalForm(): void {
    this.personalForm = this.formBuilder.group({
      residentialStatus: [null, Validators.required],
      residentialAddress: [null, Validators.required],
      residentialDate: [null, Validators.required],
      maritalStatus: [null, Validators.required],
      educationLevel: [null, Validators.required],
    });
  }

  initiateEmployerForm(): void {
    this.employerForm = this.formBuilder.group({
      employer: [null, Validators.required],
      employerSector: [null, Validators.required],
      employmentDate: [null, Validators.required],
      officeAddress: [null, Validators.required],
      workEmail: [null, Validators.required],
    });
  }

  toggleModalState(): void {
    this.closeModal.emit(false);
  }

  startApplication(): void {
    this.displayedFormIndex += 1;
  }

  submitGenericForm(formName: string): void {
    switch (formName) {
      case 'personalForm':
        if (this.personalForm.invalid) {
          return;
        } else {
          this.displayedFormIndex += 1;
        }
        break;
      case 'employerForm':
        if (this.employerForm.invalid) {
          return;
        } else {
          this.displayedFormIndex += 1;
        }
        break;
      default:
        if (this.eligibilityForm.invalid) {
          return;
        } else {
          this.displayedFormIndex += 1;
        }
        break;
    }
  }

}
