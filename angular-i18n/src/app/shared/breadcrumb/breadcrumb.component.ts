import { Component, OnInit } from "@angular/core";
import { Router, Event, ActivationEnd, NavigationEnd, } from "@angular/router";
import { filter, map, buffer, pluck } from "rxjs/operators";
import { Breadcrumb } from './breadcrumb';

// Check if an angular router 'Event' is instance of 'NavigationEnd' event
const isNavigationEnd = (ev: Event) => ev instanceof NavigationEnd;
//Check if an angular router 'Event' is instance of 'NavigationEnd' event
const isActivationEnd = (ev: Event) => ev instanceof ActivationEnd;

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"]
})
export class BreadcrumbComponent implements OnInit {

  bcLoadedData: Breadcrumb[];
  bcForDisplay;

  constructor(private router: Router) {
    // #link https://stackoverflow.com/questions/45785247/angular-2-dynamic-breadcrumbs
    // navigationEnd$ is trigered once per completed routing event, in other words
    // once per loading a component that is in the end of the current route
    const navigationEnd$ = this.router.events.pipe(filter(isNavigationEnd));

    // Here we subscribe to all navigation events, in order to update
    // our route "data", which we will use for the breadcrumb visualization.
    //
    // Than we filter the events emitted from the `router` in such way, that we are only
    // taking action upon a completed router event (in other words we are subscribing only for `ActivationEnd`
    // events)
    //
    // We use pluck to get only the requried bredcrumb data
    //
    // The buffer operator accumulates all `data` coming from the router and emmits the accumulated data once
    // when a `NavigationEnd` event passes troufh `navigationEnd$`
    //
    // The `map` in the end is used to reverse the collected data, in order to convert it to more logical
    // sequence. Without the revers first we will get the data for the current route, after that for it's parent
    // and so on (that is how the ng router works).
    this.router.events
      .pipe(
        filter(isActivationEnd),
        pluck("snapshot"),
        pluck("data"),
        buffer(navigationEnd$),
        map((bcData: any[]) => bcData.reverse())
      )
      .subscribe(routeData => {
        this.bcLoadedData = routeData;
        const totalRoutes = this.bcLoadedData.length;
        if (totalRoutes > 0) {
          // speacially to work with :params
          this.bcLoadedData[totalRoutes - 1].route = this.router.url;
        }
      });
  }

  ngOnInit() {

  }

}