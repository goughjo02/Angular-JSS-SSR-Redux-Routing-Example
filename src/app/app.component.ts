import { Component, OnInit } from "@angular/core";
import jss from "jss";
import styles from "./styles";

interface Classes {
  title: any;
  flex: any;
  size: any;
  colors: any;
}
interface sheet {
  readonly classes: Classes;
  readonly update: Function;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  title = "angular-jss";
  public classes: Classes;

  component() {}

  public ngOnInit(): void {
    const sheet: sheet = jss.createStyleSheet(styles, { link: true }).attach();
    this.classes = sheet.classes;
    sheet.update({
      title: { backgroundColor: styles.colors.red }
    });
  }
}
