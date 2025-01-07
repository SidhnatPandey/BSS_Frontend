import { Component, OnInit } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faDashboard,
  faDatabase,
  faEye,
  faGlobe,
  faHome,
  faIdCard,
  faSignOut,
  faStore,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
import { NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [FontAwesomeModule, NgIf],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.css",
})
export class SidebarComponent implements OnInit {
  faHome = faHome;
  faDashboard = faDashboard;
  faIdCard = faIdCard;
  faGlobe = faGlobe;
  faEye = faEye;
  faStore = faStore;
  faDatabase = faDatabase;
  faUsersLine = faUsersLine;
  faSignOut = faSignOut;
  dropdownVisible: number | null = null;
  navActive: any = "dashboard";
  constructor(private router: Router, private http: HttpClient) {}

  super_admin: boolean = false;

  admin_data: any;
  user_data: any;
  rbac_data: any;
  gis_data: any;
  my_acct: any;
  user_module: any;
  ai: any;
  master_database: any;

  datas = [
    {
      name: "USER MGT",
      type: false,
    },
    {
      name: "RBAC",
      type: false,
    },
    {
      name: "DATA INGESTION",
      type: false,
    },
    {
      name: "DATA VIEW",
      type: false,
    },
    {
      name: "CHANGE PASSWORD",
      type: false,
    },
    {
      name: "MY PROFILE",
      type: false,
    },
    {
      name: "HELP",
      type: false,
    },
    {
      name: "MESSAGING",
      type: false,
    },
    {
      name: "MASTER DATABASE",
      type: false,
    },
    {
      name: "AI",
      type: false,
    },
    {
      name: "AI SUMMARY REPORT",
      type: false,
    },
    {
      name: "AI DB CHAT",
      type: false,
    },
    {
      name: "AI CHATBOT",
      type: false,
    },
    {
      name: "MY ACCT",
      type: false,
    },
    {
      name: "SENSOR LIBRARY",
      type: false,
    },
    {
      name: "ACTIVITY",
      type: false,
    },
    {
      name: "TAC",
      type: false,
    },
    {
      name: "SENSOR ALLOCATION",
      type: false,
    },
    {
      name: "LOCATION OF SENSOR",
      type: false,
    },
    {
      name: "SENSOR STATUS",
      type: false,
    },
    {
      name: "CATG",
      type: false,
    },
    {
      name: "TGT TYPE",
      type: false,
    },
    {
      name: "ORBAT",
      type: false,
    },
    {
      name: "TGT SUB TYPE",
      type: false,
    },
    {
      name: "ACTIVIY SUB TYPE",
      type: false,
    },
    {
      name: "TGT CL",
      type: false,
    },
    {
      name: "ACTIVITY CL",
      type: false,
    },
    {
      name: "AGGREGATION RULE",
      type: false,
    },
    {
      name: "FMN",
      type: false,
    },
    {
      name: "TRN TYPE",
      type: false,
    },
    {
      name: "STR",
      type: false,
    },
    {
      name: "ARMS",
      type: false,
    },
    {
      name: "BSS SENSOR API",
      type: false,
    },
    {
      name: "UPLOAD DSM MAP",
      type: false,
    },
    {
      name: "E-SITRAP INCIDENT API",
      type: false,
    },
    {
      name: "DATA UPLOAD",
      type: false,
    },
    {
      name: "E-SITREP TYPE",
      type: false,
    },
    {
      name: "E-SITREP SUB TYPE",
      type: false,
    },
    {
      name: "PRECEDENCE",
      type: false,
    },
    {
      name: "MSDF RULE",
      type: false,
    },
    {
      name: "UPLOAD MISO DATA",
      type: false,
    },
    {
      name: "E-SITREP CL",
      type: false,
    },
    {
      name: "BSS TGT ACT",
      type: false,
    },
    {
      name: "DOWNLOAD JSON FORMAT",
      type: false,
    },
    {
      name: "E-CAS",
      type: false,
    },
    {
      name: "OP PLG",
      type: false,
    },
    {
      name: "ACCCS TGT",
      type: false,
    },
    {
      name: "ACCCS GUN TGT",
      type: false,
    },
    {
      name: "EMITTER NAME",
      type: false,
    },
    {
      name: "AIR DEMAND",
      type: false,
    },
    {
      name: "FIPTA SHELL",
      type: false,
    },
    {
      name: "FIPTO FUZE",
      type: false,
    },
    {
      name: "FIPTO DEG OF NEUTR",
      type: false,
    },

    {
      name: "FIPTO ACCQ SOURCE",
      type: false,
    },
    {
      name: "ECAS LINK ECORPS OCMD",
      type: false,
    },
    {
      name: "ADMIN ROL",
      type: false,
    },
  ];

  level: any = "";
  user_id: any;
  user_name: any;
  ngOnInit() {
    this.user_id = sessionStorage.getItem("user_id");
    this.user_name = sessionStorage.getItem("user_name");
    this.level = sessionStorage.getItem("level");
    console.log(this.level);
    this.admin_data = sessionStorage.getItem("sub_module");
    this.my_acct = sessionStorage.getItem("my_acct");
    this.ai = sessionStorage.getItem("ai");
    this.master_database = sessionStorage.getItem("master_database");
    console.log(this.master_database);

    const a =
      this.admin_data +
      "," +
      this.my_acct +
      "," +
      this.ai +
      "," +
      this.master_database;
    const b = a.split(",");
    console.log(b);

    this.datas.forEach((item) => {
      if (b.includes(item.name)) {
        item.type = true;
      }
    });
  }

  toggleDropdown(index: number, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.dropdownVisible = this.dropdownVisible === index ? null : index;
  }

  mouseOut() {
    this.dropdownVisible = 0;
  }
  admDashboard() {
    this.navActive = "dashboard";
    this.router.navigate(["/dashboard/adminDashboard"]);
  }
  navHome() {
    this.navActive = "dashboard";
    this.router.navigate(["/dashboard"]);
  }
  navDashboard() {
    this.navActive = "dashboard";
    this.router.navigate(["/dashboard"]);
  }
  navUm1() {
    this.navActive = "user";
    this.router.navigate(["/dashboard/searchUser"]);
  }
  navUm2() {
    this.navActive = "user";
    this.router.navigate(["/dashboard/newUser"]);
  }
  navUm3() {
    this.navActive = "user";
    this.router.navigate(["/dashboard/inactiveUser"]);
  }
  navUm4() {
    this.navActive = "user";
    this.router.navigate(["/dashboard/userActivation"]);
  }
  navRole() {
    this.navActive = "role";
    this.router.navigate(["/dashboard/roleMaster"]);
  }
  navScreen() {
    this.navActive = "role";
    this.router.navigate(["/dashboard/screenMaster"]);
  }
  navApptRole() {
    this.navActive = "role";
    this.router.navigate(["/dashboard/apptRole"]);
  }
  navAppt() {
    this.navActive = "role";
    this.router.navigate(["/dashboard/appt"]);
  }
  navChangePass() {
    this.navActive = "account";
    this.router.navigate(["/dashboard/changePassword"]);
  }
  navDataIng() {
    this.navActive = "gis";
    this.router.navigate(["/dashboard/dataIngestion"]);
  }
  navDataView() {
    this.navActive = "gis";
    this.router.navigate(["/dashboard/dataView"]);
  }
  navModule() {
    this.navActive = "role";
    this.router.navigate(["/dashboard/moduleMaster"]);
  }
  navSubModule() {
    this.navActive = "role";
    this.router.navigate(["/dashboard/subModuleMaster"]);
  }
  logoutUser() {
    const body = {
      user_id: this.user_id,
    };
    if (this.user_name != "SUPER ADMIN") {
      this.http
        .post("http://localhost:5000/removeStatus", body)
        .subscribe((response) => {
          console.log(response);
        });
    }

    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }
  SensorLibrary() {
    this.router.navigate(["/dashboard/SensorLibrary"]);
  }
  navRbac() {
    this.router.navigate(["/dashboard/rbac"]);
  }
  navAiChat() {
    this.router.navigate(["/dashboard/docChat"]);
  }
  navAiSummary() {
    this.router.navigate(["/dashboard/summary"]);
  }
  navAiDb() {
    this.router.navigate(["/dashboard/dbConnect"]);
  }
  navIntChrt() {
    this.router.navigate(["/dashboard/int_chtbrd"]);
  }
  navTgtType() {
    this.router.navigate(["/dashboard/tgtType"]);
  }
  navTgtSubType() {
    this.router.navigate(["/dashboard/tgtSubType"]);
  }
  navTgtClassification() {
    this.router.navigate(["/dashboard/tgtClassification"]);
  }
  navActivityType() {
    this.router.navigate(["/dashboard/activityType"]);
  }
  navActivitySubType() {
    this.router.navigate(["/dashboard/activitySubType"]);
  }
  navActivityClassification() {
    this.router.navigate(["/dashboard/activityClassification"]);
  }
  navEsitrepType() {
    this.router.navigate(["/dashboard/esitrepType"]);
  }
  navEsitrepSubType() {
    this.router.navigate(["/dashboard/esitrepSubType"]);
  }
  navEsitrepClassification() {
    this.router.navigate(["/dashboard/esitrepClassification"]);
  }
  navAcccsTgtType() {
    this.router.navigate(["/dashboard/acccsTgtType"]);
  }
  navAcccsGunTgt() {
    this.router.navigate(["/dashboard/acccsGunTgt"]);
  }
  navArms() {
    this.router.navigate(["/dashboard/arms"]);
  }
  navCatg() {
    this.router.navigate(["/dashboard/category"]);
  }
  navEmmiterType() {
    this.router.navigate(["/dashboard/emmiterType"]);
  }
  navEmmiterName() {
    this.router.navigate(["/dashboard/emmiterName"]);
  }
  navFmn() {
    this.router.navigate(["/dashboard/formation"]);
  }
  navPrecedence() {
    this.router.navigate(["/dashboard/precedence"]);
  }

  navStrength() {
    this.router.navigate(["/dashboard/strength"]);
  }

  navTac() {
    this.router.navigate(["/dashboard/tactical"]);
  }

  navTrn() {
    this.router.navigate(["/dashboard/terrainType"]);
  }

  navSensorStatus() {
    this.router.navigate(["/dashboard/sensorStatus"]);
  }

  navSensorAllocation() {
    this.router.navigate(["/dashboard/sensorAllocation"]);
  }

  navOpplg() {
    this.router.navigate(["/dashboard/opPlg"]);
  }
  navAggregationRule() {
    this.router.navigate(["/dashboard/aggregationRule"]);
  }

  navAirDemand() {
    this.router.navigate(["/dashboard/airDemand"]);
  }
  navFileUpload() {
    this.router.navigate(["/dashboard/fileUpload"]);
  }
  navUploadDsmMap() {
    this.router.navigate(["/dashboard/uploadDsmMap"]);
  }

  navElintEwas() {
    this.router.navigate(["/dashboard/elintEwas"]);
  }

  navAdminRol() {
    this.router.navigate(["/dashboard/elintEwas"]);
  }

  navBssSensorApi() {
    this.router.navigate(["/dashboard/bssSensor"]);
  }

  navBssTgtAct() {
    this.router.navigate(["/dashboard/bssTgtAct"]);
  }

  navJsonFormat() {
    this.router.navigate(["/dashboard/downloadJson"]);
  }

  navIncidentApi() {
    this.router.navigate(["/dashboard/esitrepIncApi"]);
  }

  navFiptoAccq() {
    this.router.navigate(["/dashboard/fiptoAccq"]);
  }

  navFiptoDeg() {
    this.router.navigate(["/dashboard/fiptoDeg"]);
  }

  navFiptoFuze() {
    this.router.navigate(["/dashboard/fiptoFuze"]);
  }

  navFiptoShell() {
    this.router.navigate(["/dashboard/fiptoShell"]);
  }

  navSensorLocation() {
    this.router.navigate(["/dashboard/sensorLocation"]);
  }

  navMsdfRule() {
    this.router.navigate(["/dashboard/msdfRule"]);
  }

  navOrbat() {
    this.router.navigate(["/dashboard/orbat"]);
  }

  uploadMiso() {
    this.router.navigate(["/dashboard/uploadMiso"]);
  }
}
