import { Component } from '@angular/core';

@Component({
    selector: 'mp-jobs',
    templateUrl: './job-history.component.html',
    styleUrls: ['./job-history.component.scss']
})

export class JobHistoryComponent {
    pageTitle: 'Job History';
    imgWidth: 3;
    imgHeight: 3;
    imgMargin: 2;
    toggleJobs: boolean = false;
    jobs: any[] = [
        {
            jobId: 1,
            jobRole: 'Test Analyst',
            jobCompany: 'StepChange Debt Charity',
            jobLocation: 'Leeds',
            jobSite: 'https://www.stepchange.org/about-us/what-we-do.aspx',
            jobStartDate: 'May 2017',
            jobEndDate: 'Present',
            jobInfo: 'Lorum ipsum StepChange',
            jobLogo: 'assets/images/jobs/stepchange-logo.jpg'
        },
        {
            jobId: 2,
            jobRole: 'System Tester',
            jobCompany: 'Skipton Building Society',
            jobLocation: 'Skipton (Head Office)',
            jobSite: 'https://www.skipton.co.uk/about-us',
            jobStartDate: 'August 2015',
            jobEndDate: 'September 2016',
            jobInfo: 'Lorum ipsum Skipton',
            jobLogo: 'assets/images/jobs/sbs-logo.jpg'
        }
    ];

    toggleJobHistorySection(): void {
        this.toggleJobs = !this.toggleJobs;
    }
}
