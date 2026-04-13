NOTES:

screen:
screens are the things that users see
screens are typically stacked using the <Stack> tag
their path defines their url
folders contained within "()" are not included in the route. this can be used to appear like a url has different subscreens.

screen presentation type:
presentation: 'card' (default) → covers previous screen
presentation: 'modal' → full sized screen that slides up from bottom
presentation: 'formSheet' → partial sized screen that slides up from bottom
presentation: 'transparentModal' → transparent background
presentation: 'containedtransparentModal' → smaller centered screen

layout files:
file names started with a "_" to signal that the file is not a screen
one _layout.tsx per folder
app/_layout.tsx → root layout (top level)
app/(tabs)/_layout.tsx → tab layout (nested)

defines screen navigation style: <Stack>, etc.
defines screen presentation styles
defines some global styles like global header styles, status bar, etc.
wraps screens with global providers (ThemeProvider, QueryClient, AuthProvider, etc.)

provider files:
global app wrappers that provide global data or functionality
exa.
 - ThemeProvider
 - AuthProvider
 - QueryClientProvider
 - NotificationProvider
 - SafeArea
 - SettingsProvider

