import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { CurrencyComponent } from './currency/currency.component';
import { ConverterComponent } from './converter/converter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AdminComponent } from './admin/admin.component';
import { GuardComponent } from './guard/guard.component';
import {AuthGuard} from './auth.guard';
import { LoginComponent } from './login/login.component';
import {LoginGuard} from './login.guard';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeComponent } from './employee/employee.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    WishlistComponent,
    RegisterComponent,
    UsersComponent,
    CurrencyComponent,
    ConverterComponent,
    DashboardComponent,
    NewsComponent,
    ArticleComponent,
    ErrorPageComponent,
    AdminComponent,
    GuardComponent,
    LoginComponent,
    EmployeesComponent,
    EmployeeRegisterComponent,
    EmployeeComponent,
    MenuComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    RouterModule.forRoot( [
      {path: '' , data: {name: 'Home'}, component: ProductListComponent},
      {path: 'products/:productId',  data: {name: 'Product'}, component: ProductDetailsComponent},
      {path: 'cart', data: {name: 'Cart'}, component: CartComponent},
      {path: 'shipping', data: {name: 'Shipping'}, component: ShippingComponent},
      { path: 'wishlist',  data: {name: ' Wishlist'}, component: WishlistComponent },
      {path: 'register',  data: {name: 'Register'}, component: RegisterComponent},
      {path: 'users', data: {name: 'Users'}, canActivate: [LoginGuard], component: UsersComponent},
      {path: 'currency', data: {name: 'Currency'}, component: CurrencyComponent},
      {path: 'converter',  data: {name: 'Converter'}, component: ConverterComponent},
      { path: 'currency-converter',  data: {name: 'Converter'}, component: ConverterComponent},
      {path: 'dashboard', data: {name: 'Dashboard'}, component: DashboardComponent},
      {path: 'dashboard/news', data: {name: 'News'}, component: NewsComponent},
      {path: 'dashboard/news/:articleId', data: {name: 'Article'}, component: ArticleComponent},
      {path: 'error', data: {name: 'Error'}, component: ErrorPageComponent},
      {path: 'admin', data: {name: 'Admin'}, canActivate: [AuthGuard], component: AdminComponent},
      {path: 'login', data: {name: 'Login'}, component: LoginComponent},
      {path: 'employees', data: {name: 'Employees'}, component: EmployeesComponent},
      {path: 'employee/register', data: {name: 'EmployeeRegister'}, component: EmployeeRegisterComponent},
      {path: 'employee/:employeeId', data: {name: 'Employee'}, component: EmployeeComponent},


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
