
# Setup

## Install

* [SQL Server 2017](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
* [NodeJS v8.12.0](https://nodejs.org/en/download/)
* [SQL Server Management Studio 2017](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-2017)

## Config

* SSMS > Server Properties > Security > Server Authentication > SQL Server and Windows Authentication mode
* SSCM > SQL Server Network Configuration > Protocols for MSSQLSERVER > TCP/IP - Enabled

## Run

Download dependencies

``` PowerShell
npm install
```

Start program

``` PowerShell
npm start
```