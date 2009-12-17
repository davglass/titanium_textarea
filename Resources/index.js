var ta1 = Titanium.UI.createTextArea({
    id: 'tx1', 
    value: '',
    height: 150,
    width: 200,
    clearOnEdit: true,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_BEZEL
});


var ta2 = Titanium.UI.createTextArea({
    id: 'tx2', 
    value: '',
    height: 150,
    width: 200,
    autocorrect: true,
    keyboardType:Titanium.UI.KEYBOARD_EMAIL_ADDRESS,
    returnKeyType: Titanium.UI.RETURNKEY_ROUTE,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_BEZEL
});


var ta3 = Titanium.UI.createTextArea({
    id: 'tx3', 
    value: '',
    height: 150,
    width: 200,
    capitalizeType: Titanium.UI.CAPITALIZE_SENTENCES,
    returnKeyType: Titanium.UI.RETURNKEY_SEARCH,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_BEZEL
});

var ta4 = Titanium.UI.createTextArea({
    id: 'tx4', 
    value: '',
    height: 150,
    width: 200,
    capitalizeType: Titanium.UI.CAPITALIZE_WORDS,
    returnKeyType: Titanium.UI.RETURNKEY_SEARCH,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_BEZEL
});

var ta5 = Titanium.UI.createTextArea({
    id: 'tx5', 
    value: '',
    height: 150,
    width: 200,
    capitalizeType: Titanium.UI.CAPITALIZE_CHARACTERS,
    returnKeyType: Titanium.UI.RETURNKEY_SEARCH,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_BEZEL
});

var ta6 = Titanium.UI.createTextArea({
    id: 'tx6', 
    value: '',
    height: 150,
    width: 200,
    color: '#336699',
    backgroundColor: '#eeeeee',
    textAlign: 'right',
    fontSize: 16,
    fontWeight: 'bold',
    capitalizeType: Titanium.UI.CAPITALIZE_SENTENCES,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_BEZEL
});


