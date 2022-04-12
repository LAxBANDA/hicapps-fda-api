<template>
    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
    >
    <template v-slot:activator="{ on, attrs }">
        <v-text-field
            :label="label"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            :value="value"
        ></v-text-field>
    </template>
    <v-date-picker
        @input="menu = false"
        v-on="$listeners"
        v-bind="$attrs"
        :value="value"
        color="red"
    ></v-date-picker>
    </v-menu>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: null
        },
        label: {
            type: String,
            default: ''
        }
    },
    inheritAttrs: false,
    data: () => ({
        menu: false,
    }),
}
</script>