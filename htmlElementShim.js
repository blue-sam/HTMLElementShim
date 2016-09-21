try {
    if (!Object.prototype.__defineGetter__ &&
	Object.defineProperty({}, "x", { get: function () { return true } }).x) {
        Object.defineProperty(Object.prototype, "__defineGetter__",
	 {
	     enumerable: false, configurable: true,
	     value: function (name, func) {
	         Object.defineProperty(this, name,
              { get: func, enumerable: true, configurable: true });
	     }
	 });
        Object.defineProperty(Object.prototype, "__defineSetter__",
	 {
	     enumerable: false, configurable: true,
	     value: function (name, func) {
	         Object.defineProperty(this, name,
              { set: func, enumerable: true, configurable: true });
	     }
	 });
    }
} catch (defPropException) { /*Do nothing if an exception occurs*/ };

// property to attribute names
var PROPS_TO_ATTRS = {
    'className': 'class',
    'htmlFor': 'for',
};

// map of attributes to the elements they affect
// see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
var HTML_ATTRIBUTES = {
    'accept': ([
      'form',
      'input',
    ]),

    'accept-charset': ([
      'form',
    ]),

    'accesskey': 'GLOBAL',

    'action': ([
      'form',
    ]),

    'align': ([
      'applet',
      'caption',
      'col',
      'colgroup',
      'hr',
      'iframe',
      'img',
      'table',
      'tbody',
      'td',
      'tfoot',
      'th',
      'thead',
      'tr',
    ]),

    'alt': ([
      'applet',
      'area',
      'img',
      'input',
    ]),

    'async': ([
      'script',
    ]),

    'autocomplete': ([
      'form',
      'input',
    ]),

    'autofocus': ([
      'button',
      'input',
      'keygen',
      'select',
      'textarea',
    ]),

    'autoplay': ([
      'audio',
      'video',
    ]),

    'autosave': ([
      'input',
    ]),

    'bgcolor': ([
      'body',
      'col',
      'colgroup',
      'marquee',
      'table',
      'tbody',
      'tfoot',
      'td',
      'th',
      'tr',
    ]),

    'border': ([
      'img',
      'object',
      'table',
    ]),

    'buffered': ([
      'audio',
      'video',
    ]),

    'challenge': ([
      'keygen',
    ]),

    'charset': ([
      'meta',
      'script',
    ]),

    'checked': ([
      'command',
      'input',
    ]),

    'cite': ([
      'blockquote',
      'del',
      'ins',
      'q',
    ]),

    'class': 'GLOBAL',

    'code': ([
      'applet',
    ]),

    'codebase': ([
      'applet',
    ]),

    'color': ([
      'basefont',
      'font',
      'hr',
    ]),

    'cols': ([
      'textarea',
    ]),

    'colspan': ([
      'td',
      'th',
    ]),

    'content': ([
      'meta',
    ]),

    'contenteditable': 'GLOBAL',

    'contextmenu': 'GLOBAL',

    'controls': ([
      'audio',
      'video',
    ]),

    'coords': ([
      'area',
    ]),

    'data': ([
      'object',
    ]),

    'datetime': ([
      'del',
      'ins',
      'time',
    ]),

    'default': ([
      'track',
    ]),

    'defer': ([
      'script',
    ]),

    'dir': 'GLOBAL',

    'dirname': ([
      'input',
      'textarea',
    ]),

    'disabled': ([
      'button',
      'command',
      'fieldset',
      'input',
      'keygen',
      'optgroup',
      'option',
      'select',
      'textarea',
    ]),

    'download': ([
      'a',
      'area',
    ]),

    'draggable': 'GLOBAL',

    'dropzone': 'GLOBAL',

    'enctype': ([
      'form',
    ]),

    'for': ([
      'label',
      'output',
    ]),

    'form': ([
      'button',
      'fieldset',
      'input',
      'keygen',
      'label',
      'meter',
      'object',
      'output',
      'progress',
      'select',
      'textarea',
    ]),

    'formaction': ([
      'input',
      'button',
    ]),

    'headers': ([
      'td',
      'th',
    ]),

    'height': ([
      'canvas',
      'embed',
      'iframe',
      'img',
      'input',
      'object',
      'video',
    ]),

    'hidden': 'GLOBAL',

    'high': ([
      'meter',
    ]),

    'href': ([
      'a',
      'area',
      'base',
      'link',
    ]),

    'hreflang': ([
      'a',
      'area',
      'link',
    ]),

    'http-equiv': ([
      'meta',
    ]),

    'icon': ([
      'command',
    ]),

    'id': 'GLOBAL',

    'ismap': ([
      'img',
    ]),

    'itemprop': 'GLOBAL',

    'keytype': ([
      'keygen',
    ]),

    'kind': ([
      'track',
    ]),

    'label': ([
      'track',
    ]),

    'lang': 'GLOBAL',

    'language': ([
      'script',
    ]),

    'list': ([
      'input',
    ]),

    'loop': ([
      'audio',
      'bgsound',
      'marquee',
      'video',
    ]),

    'low': ([
      'meter',
    ]),

    'manifest': ([
      'html',
    ]),

    'max': ([
      'input',
      'meter',
      'progress',
    ]),

    'maxlength': ([
      'input',
      'textarea',
    ]),

    'media': ([
      'a',
      'area',
      'link',
      'source',
      'style',
    ]),

    'method': ([
      'form',
    ]),

    'min': ([
      'input',
      'meter',
    ]),

    'multiple': ([
      'input',
      'select',
    ]),

    'muted': ([
      'video',
    ]),

    'name': ([
      'button',
      'form',
      'fieldset',
      'iframe',
      'input',
      'keygen',
      'object',
      'output',
      'select',
      'textarea',
      'map',
      'meta',
      'param',
    ]),

    'novalidate': ([
      'form',
    ]),

    'open': ([
      'details',
    ]),

    'optimum': ([
      'meter',
    ]),

    'pattern': ([
      'input',
    ]),

    'ping': ([
      'a',
      'area',
    ]),

    'placeholder': ([
      'input',
      'textarea',
    ]),

    'poster': ([
      'video',
    ]),

    'preload': ([
      'audio',
      'video',
    ]),

    'radiogroup': ([
      'command',
    ]),

    'readonly': ([
      'input',
      'textarea',
    ]),

    'rel': ([
      'a',
      'area',
      'link',
    ]),

    'required': ([
      'input',
      'select',
      'textarea',
    ]),

    'reversed': ([
      'ol',
    ]),

    'rows': ([
      'textarea',
    ]),

    'rowspan': ([
      'td',
      'th',
    ]),

    'sandbox': ([
      'iframe',
    ]),

    'scope': ([
      'th',
    ]),

    'scoped': ([
      'style',
    ]),

    'seamless': ([
      'iframe',
    ]),

    'selected': ([
      'option',
    ]),

    'shape': ([
      'a',
      'area',
    ]),

    'size': ([
      'input',
      'select',
    ]),

    'sizes': ([
      'img',
      'link',
      'source',
    ]),

    'span': ([
      'col',
      'colgroup',
    ]),

    'spellcheck': 'GLOBAL',

    'src': ([
      'audio',
      'embed',
      'iframe',
      'img',
      'input',
      'script',
      'source',
      'track',
      'video',
    ]),

    'srcdoc': ([
      'iframe',
    ]),

    'srclang': ([
      'track',
    ]),

    'srcset': ([
      'img',
    ]),

    'start': ([
      'ol',
    ]),

    'step': ([
      'input',
    ]),

    'style': 'GLOBAL',

    'summary': ([
      'table',
    ]),

    'tabindex': 'GLOBAL',

    'target': ([
      'a',
      'area',
      'base',
      'form',
    ]),

    'title': 'GLOBAL',

    'type': ([
      'button',
      'input',
      'command',
      'embed',
      'object',
      'script',
      'source',
      'style',
      'menu',
    ]),

    'usemap': ([
      'img',
      'input',
      'object',
    ]),

    'value': ([
      'button',
      'option',
      'input',
      'li',
      'meter',
      'progress',
      'param',
    ]),

    'width': ([
      'canvas',
      'embed',
      'iframe',
      'img',
      'input',
      'object',
      'video',
    ]),

    'wrap': ([
      'textarea',
    ]),
};

function isStandardAttribute(attrName, tagName) {
    tagName = tagName.toLowerCase();
    var attr = HTML_ATTRIBUTES[attrName.toLowerCase()];
    return !!attr && (
      attr === 'GLOBAL' ||
      attr.has(tagName)
    );
}

function propToAttr(prop) {
    return PROPS_TO_ATTRS[prop] || prop;
}

function Document() { }

Document.prototype.createTextNode = function (v) {
    var n = new Text();
    n.textContent = v;
    n.nodeName = '#text'
    n.nodeType = 3
    return n;
}

Document.prototype.createElement = function (nodeName) {
    var el = new Element();
    el.nodeName = nodeName;
    return el;
}

Document.prototype.createComment = function (data) {
    var el = new Comment()
    el.data = data
    return el;
}


function Node() { }

Text.prototype = new Node()

Element.prototype = new Node()

Comment.prototype = new Node()


function Style(el) {
    this.el = el;
    this.styles = [];
}

Style.prototype.setProperty = function (n, v) {
    this.el._setProperty(this.styles, { name: n, value: v });
}

Style.prototype.getProperty = function (n) {
    return this.el._getProperty(this.styles, n);
}

Style.prototype.__defineGetter__('cssText', function () {
    var stylified = '';
    this.styles.forEach(function (s) {
        stylified += s.name + ':' + s.value + ';';
    })
    return stylified;
})

Style.prototype.__defineSetter__('cssText', function (v) {
    this.styles.length = 0

    // parse cssText and set style attributes
    v.split(';').forEach(function (part) {
        var splitPoint = part.indexOf(':')
        if (splitPoint) {
            var key = part.slice(0, splitPoint).trim()
            var value = part.slice(splitPoint + 1).trim()
            this.setProperty(key, value)
        }
    }, this)
})

function Attribute(name, value) {
    if (name) {
        this.name = name;
        this.value = value ? value : '';
    }
}


function Element() {
    var self = this;

    this.style = new Style(this)
    this.childNodes = [];
    this.attributes = [];
    this.dataset = {};
    this.className = '';

    this._setProperty = function (arr, obj, key, val) {
        var p = self._getProperty(arr, key);
        if (p) {
            p.value = String(val);
            return;
        }
        arr.push('function' === typeof obj ? new obj(key.toLowerCase(), String(val)) : obj);
    }

    this._getProperty = function (arr, key) {
        if (!key) return;
        key = key.toLowerCase();
        for (var i = 0; i < arr.length; i++) {
            if (key == arr[i].name) return arr[i];
        }
    }
}

Element.prototype.nodeType = 1;

Element.prototype.appendChild = function (child) {
    child.parentElement = this;
    this.childNodes.push(child);
    return child;
}

Element.prototype.setAttribute = function (n, v) {
    if (n == 'style') {
        this.style.cssText = v
    } else {
        this._setProperty(this.attributes, Attribute, n, v);
    }
}

Element.prototype.getAttribute = function (n) {
    if (n == 'style') {
        return this.style.cssText
    } else {
        var result = this._getProperty(this.attributes, n);
        return typeof result !== 'undefined' ? result.value : null;
    }
}

Element.prototype.removeAttribute = function (n) {
    if (n === 'class') {
        delete this.className;
    } else {
        for (var i = 0, len = this.attributes.length; i < len; i++) {
            if (this.attributes[i].name === n) {
                this.attributes.splice(i, 1);
                break;
            }
        }
    }
}

Element.prototype.replaceChild = function (newChild, oldChild) {
    var self = this;
    var replaced = false;
    this.childNodes.forEach(function (child, index) {
        if (child === oldChild) {
            self.childNodes[index] = newChild;
            replaced = true;
        }
    });
    if (replaced) return oldChild;
}

Element.prototype.removeChild = function (rChild) {
    var self = this;
    var removed = true;
    this.childNodes.forEach(function (child, index) {
        if (child === rChild) {
            // use splice to keep a clean childNode array
            self.childNodes.splice(index, 1)
            removed = true;
        }
    })
    if (removed) return rChild;
}

Element.prototype.insertBefore = function (newChild, existingChild) {
    var childNodes = this.childNodes;
    for (var i = 0, len = childNodes.length; i < len; i++) {
        var child = childNodes[i];
        if (child === existingChild) {
            i === 0 ? childNodes.unshift(newChild) : childNodes.splice(i, 0, newChild);
            break;
        }
    }
    return newChild;
}

Element.prototype.addEventListener = function (type, listener, useCapture, wantsUntrusted) {
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener
    // There is an implementation there but probably not worth it.
}

Element.prototype.removeEventListener = function (type, listener, useCapture) {
    // https://developer.mozilla.org/en/docs/Web/API/EventTarget.removeEventListener
    // There is an implementation there but probably not worth it.
}

Element.prototype.insertAdjacentHTML = function (position, text) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element.insertAdjacentHTML
    // Not too much work to implement similar to innerHTML below.
}

Element.prototype.__defineGetter__('innerHTML', function () {
    // regurgitate set innerHTML
    var s = this.childNodes.html || ''
    this.childNodes.forEach(function (e) {
        s += (e.outerHTML || e.textContent)
    })
    return s
})

Element.prototype.__defineSetter__('innerHTML', function (v) {
    //only handle this simple case that doesn't need parsing
    //this case is useful... parsing is hard and will need added deps!
    this.childNodes.length = 0

    // hack to preserve set innerHTML - no parsing just regurgitation
    this.childNodes.html = v
})


Element.prototype.__defineGetter__('outerHTML', function () {
    var a = [], self = this;
    var VOID_ELEMENTS = {
        AREA: true,
        BASE: true,
        BR: true,
        COL: true,
        EMBED: true,
        HR: true,
        IMG: true,
        INPUT: true,
        KEYGEN: true,
        LINK: true,
        META: true,
        PARAM: true,
        SOURCE: true,
        TRACK: true,
        WBR: true
    };

    function _stringify(arr) {
        var attr = [], value;
        arr.forEach(function (a) {
            value = ('style' != a.name) ? a.value : self.style.cssText;
            attr.push(a.name + '=' + '\"' + escapeAttribute(value) + '\"');
        })
        return attr.length ? ' ' + attr.join(" ") : '';
    }

    function _dataify(data) {
        var attr = [], value;
        Object.keys(data).forEach(function (name) {
            attr.push('data-' + name + '=' + '\"' + escapeAttribute(data[name]) + '\"');
        })
        return attr.length ? ' ' + attr.join(" ") : '';
    }

    function _propertify() {
        var props = [];
        for (var key in self) {
            var attrName = propToAttr(key);
            if (
              self.hasOwnProperty(key) &&
              ['string', 'boolean', 'number'].indexOf(typeof self[key]) !== -1 &&
              isStandardAttribute(attrName, self.nodeName) &&
              _shouldOutputProp(key, attrName)
            ) {
                props.push({ name: attrName, value: self[key] });
            }
        }
        return props ? _stringify(props) : '';
    }

    function _shouldOutputProp(prop, attr) {
        if (self.getAttribute(attr)) {
            // let explicitly-set attributes override props
            return false;
        } else {
            if (prop === 'className' && !self[prop]) {
                return false;
            }
        }
        return true;
    }

    var attrs = this.style.cssText ? this.attributes.concat([{ name: 'style' }]) : this.attributes;

    a.push('<' + this.nodeName + _propertify() + _stringify(attrs) + _dataify(this.dataset) + '>')

    if (!VOID_ELEMENTS[this.nodeName.toUpperCase()]) {
        a.push(this.innerHTML)
        a.push('</' + this.nodeName + '>')
    }

    return a.join('')
})

Element.prototype.__defineGetter__('textContent', function () {
    var s = ''
    this.childNodes.forEach(function (e) {
        s += e.textContent
    })
    return s
})

Element.prototype.addEventListener = function (t, l) { }

function escapeHTML(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function escapeAttribute(s) {
    return escapeHTML(s).replace(/"/g, '&quot;')
}

Element.prototype.nodeValue = null;

function Text() { }

Text.prototype.nodeType = 3;

Text.prototype.nodeName = '#text';

Text.prototype.__defineGetter__('textContent', function () {
    return escapeHTML(this.value || '');
})

Text.prototype.__defineSetter__('textContent', function (v) {
    this.value = v
})

Text.prototype.__defineGetter__('nodeValue', function () {
    return escapeHTML(this.value || '');
})

Text.prototype.__defineSetter__('nodeValue', function (v) {
    this.value = v
})

Text.prototype.__defineGetter__('length', function () {
    return (this.value || '').length;
})

Text.prototype.replaceData = function (offset, length, str) {
    this.value = this.value.slice(0, offset) + str + this.value.slice(offset + length);
};

function Comment() { }

Comment.prototype.nodeType = 8;

Comment.prototype.nodeName = '#comment';

Comment.prototype.__defineGetter__('data', function () {
    return this.value
})

Comment.prototype.__defineSetter__('data', function (v) {
    this.value = v
})

Comment.prototype.__defineGetter__('outerHTML', function () {
    return '<!--' + escapeHTML(this.value || '') + '-->'
})

Comment.prototype.__defineGetter__('nodeValue', function () {
    return escapeHTML(this.value || '');
})

Comment.prototype.__defineSetter__('nodeValue', function (v) {
    this.value = v
})

function defineParentNode(obj) {
    obj.__defineGetter__('parentNode', function () { return this.parentElement });
}

defineParentNode(Element.prototype)
defineParentNode(Comment.prototype)
defineParentNode(Text.prototype)
defineParentNode(Node.prototype)

var document = new Document();

Element.prototype.setAttributes = function (attributes) {
    //var isPlainObject = Object.prototype.toString.call(attributes) === '[object Object]' &&
    //  typeof attributes.constructor === 'function' &&
    //  Object.prototype.toString.call(attributes.constructor.prototype) === '[object Object]' &&
    //  attributes.constructor.prototype.hasOwnProperty('isPrototypeOf');
    var element = this;

    for (var key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
};

Element.prototype.appendChildren = function (children) {
    var element = this;
    children = Array.isArray(children) ? children : [children];
    children.forEach(function (child) {
        if (child instanceof Element) {
            element.appendChild(child);
        } else if (child || typeof child === 'string') {
            element.appendChild(document.createTextNode(child.toString()));
        }
    });
};
