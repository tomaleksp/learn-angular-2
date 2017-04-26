import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<button (click)='toggleState()'>My Button</button>
                <ul>
                    <li *ngFor="let item of items" [@myTrigger]='state'>{{ item }}</li>
                </ul>
    `,
    styles: [`
        ul { list-style-type:none; margin: 30px 30px 0 0; padding: 0; }
        li {
            padding:15px;
            width:100%;
            background:#f1f1f1;
            margin-bottom:2px;
            font-weight:bold;
        }
    `],
    animations: [
        trigger('myTrigger', [
            state('small', style({
                transform: 'scale(1)'
            })),
            state('large', style({
                transform: 'scale(1.4)'
            })),
            state('extra-large', style({
                transform: 'scale(2)'
            })),
            state('fadeIn', style({
                opacity: '1'
            })),
            transition('void => *', [
                style({ opacity: '0', transform: 'translateY(20px)' }),
                animate('750ms 0s ease-out')
            ])
            // one way
            // transition('small => large', animate('500ms')),
            // transition('large => small', animate('500ms')),

            // second way
            // transition('small => large, large => small', animate('500ms'))

            // third way
            // transition('small <=> large', animate('500ms'))

            // transition('* => small', animate('500ms'))
            // transition('* => *', animate('500ms'))


        ])
    ]
})
export class AppComponent {
    state: string = 'fadeIn';
    items: any[] = ['item1', 'item2', 'item2', 'item3'];

    toggleState() {
        //this.state = (this.state === 'small' ? 'large' : 'small');
        this.items.push('another item');
        this.state = 'fadeIn';
    }
}
