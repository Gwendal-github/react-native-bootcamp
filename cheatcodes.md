# Cheatcodes

## Programming   

ife⇥
if (${1:condition}) {
${0}
} else {
}

ter⇥ ${1:condition} ? ${2:expression} : ${3:expression};

fl⇥
for (let ${1:i} = ${2:iterable}.length - 1; ${1:i} >= 0; ${1:i}--) {
${0}
}

fn⇥
function ${1:name}(${2:arguments}) {
${0}
}

## React  

rnfe
import React from 'react'
import { View, Text } from 'react-native'

const $1 = () => {
return (
<View>
<Text> $2 </Text>
</View>
)
}

export default $1

rnf
import React from 'react'
import { View, Text } from 'react-native'

export default function $1() {
return (
<View>
<Text> $2 </Text>
</View>
)
}

## Turbo Consolelog   

Ctrl+Alt+L
