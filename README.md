# project_irf_env

An extension combine with local server to modify the local system files

## Getting Started

Basically this project has two modules 

```

1. Chrome Extesnion

```

```

2. Node server (for file handling)

```

### 1. Chrome  Extension

The source code for this project is sited in **Extension** folder of main folder.

The following permissions has been used for this extension

```
1. Chrome localstorage
```
```
2. An Entry in permission session for server api calls
```
Through this extension, server call will be happen
### 2. Node server

This is a simple node server project which constantly runs in the background and modifies the file system of irf-perdix-client project.

The following libraries has been used

```
1.  Express (for api handling)
```
```
2.  custom-env (for env maintance)
```
```
3.  fs (inbuilt node module for fie handling)
```
This server constantly runs in background and interacts with the Extension.
