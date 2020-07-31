import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';

import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy{
    @Output() OnTyping = new EventEmitter<string>();
    @Input() value = '';
    debounce: Subject<string> = new Subject<string>();

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }
    ngOnInit(): void {
        this.debounce.pipe(debounceTime(30)).subscribe(filter => this.OnTyping.emit(filter));
    }


}