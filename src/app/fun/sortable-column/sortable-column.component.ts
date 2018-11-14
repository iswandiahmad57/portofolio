import { Component,EventEmitter, OnInit,Input,Output,HostListener,ElementRef } from '@angular/core';
import { SortableService,ColumnSortedEvent } from '../sortable-service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: '[sortable-column]',
  templateUrl: './sortable-column.component.html',
  styleUrls: ['./sortable-column.component.scss']
})
export class SortableColumnComponent implements OnInit {
  @Input('sortable-column')
    columnName: string;

  @Input('sort-direction')
  sortDirection: string = '';
  @Output() goSort = new EventEmitter<ColumnSortedEvent>();
  private columnSortedSubscription: Subscription;

  @HostListener('click')
  sort() {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

     
      this.sortService.columnSorted({ sortColumn: this.columnName, sortDirection: this.sortDirection });
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.cursor="pointer";
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.cursor="default";
  }
 

  constructor(private sortService: SortableService,private el: ElementRef) { }

  ngOnInit() {
    // subscribe to sort changes so we can react when other columns are sorted
    this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
        // reset this column's sort direction to hide the sort icons
        if (this.columnName != event.sortColumn) {
            this.sortDirection = '';
        }
    });
  }

  ngOnDestroy() {
      this.columnSortedSubscription.unsubscribe();
  }

}
