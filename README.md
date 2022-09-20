# collapsible-js
 A package to help make HTML elements collapsible


## Usage
Install the package.
```
npm install collapsible-js
```

Make sure to include this in you css with adjustments to suit your needs.
```
/* Collapse CSS */
    .collapsible
    {
        cursor: pointer;
        position:'absolute';
        background-color: lightblue;/* adjust as needed */
        height: 20px;/* adjust as needed */
        width: 100px;/* adjust as needed */
    }
    .collapsible:hover
    {
        background-color: rgb(41, 40, 40) /* adjust as needed */
    }
    /* Collapse content CSS */
    .collapsible-content
    {
        overflow:hidden;
        max-height: 0px ;
        /* adjust as needed */
        -webkit-transition: max-height 2s ease-out;
        -moz-transition: max-height 2s ease-out;
        transition: max-height 2s ease-out;
    }
```

In your html class the outer container as 'collapsible' and the inner contents as 'collaspible-content'.
```
<div id="collapsible" class="collapsible">
        Collapsible
        <div class="collapsible-content">
            <form class="form-upload">
            <input class="input-file" type="file" multiple>
            <input type="submit">
            </form>
        </div>
        
    </div>
```

Import and use the package.
```
import { makeCollapsible } from 'collapsible-js'

//get all elements classed collapsible
var collapsibleArr = document.querySelectorAll('.collapsible')

//for each elements - call the makeCollapsible function
collapsibleArr.forEach((col) => makeCollapsible(col as HTMLElement))
```


And that it :). It should just make the items collapsible and you can adjust the css as needed.
