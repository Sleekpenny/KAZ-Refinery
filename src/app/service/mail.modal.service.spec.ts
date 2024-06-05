import { TestBed } from '@angular/core/testing';

import { MailModalService } from './mail.modal.service';

describe('MailModalService', () => {
  let service: MailModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
