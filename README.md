# React Internalization

This is a simple library which allows React.js developer to create easily translations for their components.
The package contains three components:
* **Internalization** - main component which loads translations data and globally store current language.
* **Translations** - component which iterate through keys of translations object and allows developer to view every key as a component.
* **Tr** - a wrapper on component which is supposed to be translate.

and two hooks:
* **useLanguages** - hook version of Translations component.
* **useTranslation** - hook version of Tr component.

## Installation
Use *git clone* to copy this repository to your local storage, and simply copy the internalization folder into src.

## Translations object API
There are two ways to serve translations for this library:
1. You can create JSON file in public folder and import it directly into source files. The example file is given below:
```json
{
  "en": {
    "greetings": "Hello world",
    "thanks": "Thank you!"
  },
  "sp": {
    "greetings": "Hola mundo",
    "thanks": "¡Gracias!"
  }
}
```

Each language keys are supposed to have length equal 2.
Language objects assigned to language keys can be nested, example:
```json
{
  "en": {
    "MessageBox": {
      "Yes": "Yes",
      "No": "No"
    }
  },
  "default": "en"
}
```

2. You can serve JSON object from your REST API server. You should return object consist of one key with current language name, for example:
```
https://path.to.your.api.com/translations/en
```
It returns object:
```json
{
  "en": {
    "key": "value"
  }
}
```

It is necessary, because Internalization component returns the value stored in *lang* prop key. When key is undefined, the component use *defaultLang* prop to do it. When defaultLang is not exist in translation object, the Tr components throw exceptions.

## Components API

### Internalization
```
<Internalization
  data: Translation Object,
  lang: String,
  defaultLang: String,
  children: Node
>
```

This is a main component which store the translation part from translation object given from *lang* or *defaultLang* key.
You should always wrap all components which use Tr component by this.
```jsx
//imports...

const App => () {
  return(
    <Internalization data={translations} lang="en" defaultLang="en">
      <div className="App">
        <Tr component={<p>} iKey="helloWorld" />
      </div>
    </Internalization>
  )
}
```

### Translations
```
<Translations
  children: function(value, index)
  translations: Object
>
```

This component iterates through keys of translation object and allows developers use them where they want.

```xml
//...

<Translations translations={data}>
  {(lang, index) => <p key={index}>{lang}</p>}
</Translations>

//...

const [translations, setTranslations] = useState([]);

<Translations translations={data}>
  {lang => setTranslations([
    ...translations,
    lang
  ])}
</Translations>
```

### Tr
```
<Tr
  component: React.Component
  iKey: String
  ...props
>
```

This component create new component from *component* prop and set as its children value stored in translation object, which is identified by *iKey* prop. If you want to get value from nested objects you can just create string from each key of each nested object and separate them by period *(.)*. You can also set any props you want and they will be passed into new component.

Let the translation object has the following shape:

```js
const translations = {
  'en': {
    'key1': 'hello',
    'key2': 'world'
  }
}
```
The **Tr** component below:
```xml
<Tr component={<p>} iKey="key1" />
```
generates following html code:
```html
<p>hello</p>
```

#### More examples
```xml
<Tr component={<a>} iKey="key1" href="/submit" title="world" />
```
```html
<a href="/submit" title="world">hello</a>
```

If you set *component* prop as component with children, and the key value from *iKey* prop is undefined then **Tr** component returns component without changes.
```xml
<Tr component={<p>default</p>} iKey="key3">
```
(*key3* is undefined)
```html
<p>default</p>
```

Also you can set props inside *component* props instead of setting props in **Tr** component:
```xml
<Tr component={<a href="/submit">default</a>} iKey="key1" />
```
It also helps to avoid some warnings from eslint.

## Hooks API
Hooks allow developer use **Translations** and **Tr** components without using JSX.

### useLanguages
useLanguages like Translations returns the array with languages ID.
```js
const langs = useLanguages(translations);
// ['en', 'fr', 'ru', 'pl'];
```

### useTranslation
useTranslation like Tr return the value from translation object. It should return the value or object with *key: value* pairs.
```js
const title = useTranslation('MessageBox.title');
// title = 'some title'

const MessageBox = useTranslation('MessageBox');
const otherTitle = MessageBox.title;
```

## More examples
TODO