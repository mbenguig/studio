define(
    [
        'backbone',
        'proactive/model/SchemaModel',
        'proactive/model/Script'
    ],

    function (Backbone, SchemaModel, Script) {

        "use strict";

        return SchemaModel.extend({
            schema: {
                "Java Home": {
                    type: "Text",
                    fieldAttrs: {
                        'placeholder': 'forkEnvironment->@attributes->javaHome',
                        "data-help": 'Java installation directory on the node side. Must not include /bin/java.'
                    }
                },
                "Jvm Arguments": {
                    type: 'List',
                    itemType: 'Text',
                    fieldAttrs: {
                        'placeholder': 'forkEnvironment->jvmArgs->jvmArg',
                        'itemplaceholder': '@attributes->value',
                        "data-help": 'JVM properties e.g:<br/>-Xmx2G<br/>-Dprop.name=value'
                    }
                },
                "Working Dir": {
                    type: "Text",
                    fieldAttrs: {
                        'placeholder': 'forkEnvironment->@attributes->workingDir',
                        "data-help": 'JVM working directory'
                    }
                },
                "Additional Classpath": {
                    type: 'List',
                    itemType: 'Text',
                    fieldAttrs: {
                        'placeholder': 'forkEnvironment->additionalClasspath->pathElement',
                        'itemplaceholder': '@attributes->path',
                        "data-help": 'The list of \"pathElement\" representing the classpath to be added when starting the new JVM.'
                    }
                },
                "Environment Variables": {
                    type: 'List',
                    itemType: 'Object',
                    fieldAttrs: {
                        'placeholder': 'forkEnvironment->SystemEnvironment->variable',
                        "data-help": 'The list of system variables that will be added to the forked JVM process'
                    },
                    subSchema: {
                        "Name": {type: "Text", fieldAttrs: {'placeholder': '@attributes->name'}},
                        "Value": {type: "Text", fieldAttrs: {'placeholder': '@attributes->value'}},
                    }
                },
                "Environment Script": {
                    type: 'NestedModel',
                    model: Script,
                    fieldAttrs: {
                        'placeholder': 'forkEnvironment->envScript->script',
                        "data-help": 'Environment script that is able to add/change each items of the fork environment programmatically.'
                    }
                }
            }
        })
    })
