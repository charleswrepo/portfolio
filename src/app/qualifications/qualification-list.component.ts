import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mp-qualifications',
    templateUrl: './qualification-list.component.html',
    styleUrls: ['./qualification-list.component.scss']
})

export class QualificationListComponent {
    pageTitle: 'Qualification List';
    imgWidth: 3;
    imgHeight: 3;
    imgMargin: 2;
    qualifications: any[] = [
        {
            qualId: 0,
            qualName: 'Information Communication Technology',
            qualPlace: 'University of Huddersfield',
            qualSite: 'https://www.hud.ac.uk/about/',
            qualStartYear: 2013,
            qualEndYear: 2017,
            qualGrade: '1st Class',
            qualType: 'Degree',
            qualLogo: 'assets/images/qualifications/uoh-logo.jpg'
        },
        {
            qualId: 1,
            qualName: 'ISTQB Foundation Level',
            qualPlace: 'Skipton Building Society',
            qualSite: 'https://www.skipton.co.uk/about-us',
            qualStartYear: 2015,
            qualEndYear: 2016,
            qualGrade: 'Pass',
            qualType: 'Certification',
            qualLogo: 'assets/images/qualifications/sbs-logo.jpg'
        },
        {
            qualId: 3,
            qualName: 'Information Communication Technology',
            qualPlace: 'Notre Dame Catholic Sixth Form College',
            qualSite: 'https://www.notredamecoll.ac.uk/about-us',
            qualStartYear: 2010,
            qualEndYear: 2013,
            qualGrade: 'Distinction*',
            qualType: 'BTEC',
            qualLogo: 'assets/images/qualifications/nd-logo.jpg'
        },
        {
            qualId: 4,
            qualName: 'Mathematics',
            qualPlace: 'Mount Saint Mary’s Catholic High School',
            qualSite: 'http://mountstmarys.org/',
            qualStartYear: 2005,
            qualEndYear: 2010,
            qualGrade: 'A',
            qualType: 'GCSE',
            qualLogo: 'assets/images/qualifications/msm-logo.jpg'
        },
        {
            qualId: 5,
            qualName: 'English Language',
            qualPlace: 'Mount Saint Mary’s Catholic High School',
            qualSite: 'http://mountstmarys.org/',
            qualStartYear: 2005,
            qualEndYear: 2010,
            qualGrade: 'A',
            qualType: 'GCSE',
            qualLogo: 'assets/images/qualifications/msm-logo.jpg'
        },
        {
            qualId: 6,
            qualName: 'English Literature',
            qualPlace: 'Mount Saint Mary’s Catholic High School',
            qualSite: 'http://mountstmarys.org/',
            qualStartYear: 2005,
            qualEndYear: 2010,
            qualGrade: 'A',
            qualType: 'GCSE',
            qualLogo: 'assets/images/qualifications/msm-logo.jpg'
        }
    ];
}
