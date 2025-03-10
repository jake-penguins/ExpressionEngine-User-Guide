<!--
    This source file is part of the open-source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# ExpressionEngine v7 Change Log

## Version 7.2.17
(Release: May 2, 2023)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/931642?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Sobral</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=robsonsobral" target="_BLANK">@robsonsobral</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

**Enhancements** 🚀

- Improved counting members on role
- Added extra information on RTE advanced configuration
- Resolved issue where icons on Channels page were not self-evident
- Enabled File field to be used as Pro Variable; [#2498](https://github.com/ExpressionEngine/ExpressionEngine/issues/2498)
- Added separate list with selected categories for Entry page Category tab [#2807](https://github.com/ExpressionEngine/ExpressionEngine/issues/2807)
- Added more information to template debugger when using `search` parameter in `exp:channel:entries`; [#2670](https://github.com/ExpressionEngine/ExpressionEngine/issues/2670)

**Bug Fixes** 💃🐛

- Wrap Structure global functions to avoid conflict
- Resolved [#3261](https://github.com/ExpressionEngine/ExpressionEngine/issues/3261) where empty Grid row could have been added in Fluid upon saving
- Resolved [#2148](https://github.com/ExpressionEngine/ExpressionEngine/issues/2148) where entry status was not updated after change of status name
- Resolved [#477](https://github.com/ExpressionEngine/ExpressionEngine/issues/477) where no information was provided when editing entry with status that's not accessible to member
- Resolved [#3331](https://github.com/ExpressionEngine/ExpressionEngine/issues/3331) Where Categories tab shows empty alert when no category groups assigned
- Resolved [#758](https://github.com/ExpressionEngine/ExpressionEngine/issues/758) where installation wizard did not work when PHP was configured to have no memory limit
- Resolved [#1795](https://github.com/ExpressionEngine/ExpressionEngine/issues/1795) Where display of negative numerical field has - placed incorrectly for RTL text direction
- Resolved issue where setting member field type might not work properly when called programmatically
- Resolved [#3224](https://github.com/ExpressionEngine/ExpressionEngine/issues/3224) where descending sorting order did not persist when using pagination in File Manager
- Resolved [#2609](https://github.com/ExpressionEngine/ExpressionEngine/issues/2609) where the permissions for Guests role could be incorrect and Guest could log in
- Resolved [#2570](https://github.com/ExpressionEngine/ExpressionEngine/issues/2570) where saving empty "Select Entries" Pro Variable was throwing SQL error
- Resolved [#2843](https://github.com/ExpressionEngine/ExpressionEngine/issues/2843) where Channel Form was saving file field data in old format
- Resolved [#2112](https://github.com/ExpressionEngine/ExpressionEngine/issues/2112) where deleting too many logs could cause the system go out of memory
- Resolved [#2387](https://github.com/ExpressionEngine/ExpressionEngine/issues/2387) where PHP error could be shown when several developer logs are existing
- Resolved [#3286](https://github.com/ExpressionEngine/ExpressionEngine/issues/3286) when warning was shown when using member fields with PHP 8.2

**Developers** 💻

- Added `GridColumn` model
- Improve error reporting when instantiating non-existent model
- Added relationships to model definitions that were missing
- Improve string-to-boolean conversion; [#1959](https://github.com/ExpressionEngine/ExpressionEngine/issues/1959)

## Version 7.2.16
(Release: April 24, 2023)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/931642?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Sobral</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=robsonsobral" target="_BLANK">@robsonsobral</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

**Enhancements 🚀**

- Optimize logging developer messages; [#3057](https://github.com/ExpressionEngine/ExpressionEngine/issues/3057)
- Added keyboard shortcut for saving Pro Variables
- Resolved [#3222](https://github.com/ExpressionEngine/ExpressionEngine/issues/3222) where File icon in File field does not match field type
- Resolved [#2028](https://github.com/ExpressionEngine/ExpressionEngine/issues/2028) where Installer/Updater does not respect the theme
- Resolved [#3247](https://github.com/ExpressionEngine/ExpressionEngine/issues/3247), where H2 tag didn't respect theme colors on Redactor RTE 
- Improved styles for Pages add-on settings 
- Improved [#518](https://github.com/ExpressionEngine/ExpressionEngine/issues/518) where 'Include in search' option from Relationships field should have been hidden.

**Bug Fixes** 💃🐛

- Resolved [#3222](https://github.com/ExpressionEngine/ExpressionEngine/issues/3222) where File icon in File field does not match field type
- Resolved [#3174](https://github.com/ExpressionEngine/ExpressionEngine/issues/3174) where min height of RTE field could be wrong when using different CKEditor configurations for same entry
- Resolved [#3272](https://github.com/ExpressionEngine/ExpressionEngine/issues/3272) where parsing order was not correct for add-ons that contain both module and plugin file
- Resolved [#846](https://github.com/ExpressionEngine/ExpressionEngine/issues/846), [#1840](https://github.com/ExpressionEngine/ExpressionEngine/issues/1840) where scroll immediately closes the sidebar on mobile screen
- Resolved [#2417](https://github.com/ExpressionEngine/ExpressionEngine/issues/2417) where PHP error could have shown when saving channel layout
- Resolved [#3274](https://github.com/ExpressionEngine/ExpressionEngine/issues/3274) where special characters in URL for on-the-fly manipulated images were encoded twice
- Resolved [#3245](https://github.com/ExpressionEngine/ExpressionEngine/issues/3245) where 0 could be displayed as empty string in template variables provided by add-ons
- Resolved [#3246](https://github.com/ExpressionEngine/ExpressionEngine/issues/3246) where not all checks for empty Grid or Fluid field worked correctly in templates when using PHP 8.1
- Resolved [#3190](https://github.com/ExpressionEngine/ExpressionEngine/issues/3190) where pagination in File Manager did not respect permissions for upload directories
- Resolved [#3302](https://github.com/ExpressionEngine/ExpressionEngine/issues/3302) where Structure was showing deprecation notices when using PHP 8.2
- Resolved [#3191](https://github.com/ExpressionEngine/ExpressionEngine/issues/3191) where PHP errors could be shown when installing add-on that have a fieldtype and module
- Resolved [#3286](https://github.com/ExpressionEngine/ExpressionEngine/issues/3286) where PHP errors could be thrown on creating of a dynamic property
- Resolved [#510](https://github.com/ExpressionEngine/ExpressionEngine/issues/510) where existing entries did not have the correct value for toggle field after it was added to a channel it also did not prompt to update existing entries with the default toggle value

## Version 7.2.15
(Release: April 12, 2023)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
    </ul>
</div>
</div>

**Bug Fixes** 💃🐛

- Resolved [#1899](https://github.com/ExpressionEngine/ExpressionEngine/issues/1899) Where the "link" HTML button didn't work as intended
- Resolved [#3202](https://github.com/ExpressionEngine/ExpressionEngine/issues/3202) where searching in Categories filter in File Manager category did not work after changing another filter
- Resolved [#3157](https://github.com/ExpressionEngine/ExpressionEngine/issues/3157) where the list of authors to reassign the entries when deleting member could be wrong
- Resolved [#3101](https://github.com/ExpressionEngine/ExpressionEngine/issues/3101) where autosaves table for new entry included entries from other channels
- Resolved [#3162](https://github.com/ExpressionEngine/ExpressionEngine/issues/3162) where in RTE field using CKEditor the links to images in subfolder were not correct
- Resolved [#3152](https://github.com/ExpressionEngine/ExpressionEngine/issues/3152) where settings for RTE Pro Variables field were not saved
- Resolved [#3147](https://github.com/ExpressionEngine/ExpressionEngine/issues/3147) where templates export did not work when using PHP 8.1
- Resolved [#1099](https://github.com/ExpressionEngine/ExpressionEngine/issues/1099) where File Menu Width Remains Too Narrow
- Resolved [#3027](https://github.com/ExpressionEngine/ExpressionEngine/issues/3027) where upload directories with angle brackets were not displayed correctly in file manager filters

## Version 7.2.14
(Release: April 6, 2023)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>


**Bug Fixes** 💃🐛

- Resolved issue where login form on front-end was showing incorrect error


## Version 7.2.13
(Release: April 4, 2023)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/422821?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Tom Jaeger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=TomJaeger" target="_BLANK">@TomJaeger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1181219?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">robinsowell</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=robinsowell" target="_BLANK">@robinsowell</a></p></div></div></div></li>
    </ul>
</div>
</div>

**Bug Fixes** 💃🐛

- Resolved issue where Live Preview did not work with Fluid fields
- Resolved [#3129](https://github.com/ExpressionEngine/ExpressionEngine/issues/3129) where "extension missing" messages could be visible to guests even when the site is offline
- Resolved [#2752](https://github.com/ExpressionEngine/ExpressionEngine/issues/2752) where cross-domain multi-site login was not working
- Fixed [#3130](https://github.com/ExpressionEngine/ExpressionEngine/issues/3130) where the filter control to add/delete columns doesn't do anything on File modal on publish
- Resolved [#3127](https://github.com/ExpressionEngine/ExpressionEngine/issues/3127) where PHP error was shown when creating shortcut from Pro Search log
- Fixed [#3120](https://github.com/ExpressionEngine/ExpressionEngine/issues/3120) where duplicate status options with large number of statuses in cp
- Resolved [#3126](https://github.com/ExpressionEngine/ExpressionEngine/issues/3126) where Mass Notification Export utility did not work properly
- Resolved [#3135](https://github.com/ExpressionEngine/ExpressionEngine/issues/3135), [#3047](https://github.com/ExpressionEngine/ExpressionEngine/issues/3135) where the columns in Entry Manager did not dynamically update if some column is not available
- Resolved issue with sidebar member links

- **Enhancements** 🚀
  - Added new needed_fields_only paramater to channel entries loop


## Version 7.2.12
(Release: March 20, 2023)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/17785714?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Jonathan Hardisty</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=jHards" target="_BLANK">@jHards</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/422821?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Tom Jaeger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=TomJaeger" target="_BLANK">@TomJaeger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1181219?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">robinsowell</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=robinsowell" target="_BLANK">@robinsowell</a></p></div></div></div></li>
    </ul>
</div>
</div>

**Bug Fixes** 💃🐛

- Resolved [#3019](https://github.com/ExpressionEngine/ExpressionEngine/issues/3019) where MFA dialog was shown after disabling MFA
- Resolved [#2839](https://github.com/ExpressionEngine/ExpressionEngine/issues/2839) where manipulation URL was wrong for SVG files
- Resolved [#3075](https://github.com/ExpressionEngine/ExpressionEngine/issues/3075) where some email notifications did not respect HTML formatting preference
- Resolved [#2842](https://github.com/ExpressionEngine/ExpressionEngine/issues/2842) where channel form with HTML buttons could show notices when using PHP 8.1
- Resolved [#2207](https://github.com/ExpressionEngine/ExpressionEngine/issues/2207) where the bug report link was incorrect
- Resolved [#2822](https://github.com/ExpressionEngine/ExpressionEngine/issues/2822), [#2678](https://github.com/ExpressionEngine/ExpressionEngine/issues/2678) where some custom fields were not properly parsed in Live Preview mode
- Resolved [#3093](https://github.com/ExpressionEngine/ExpressionEngine/issues/3093) where deprecation message could be shown when editing members using PHP 8.1
- Resolved [#3116](https://github.com/ExpressionEngine/ExpressionEngine/issues/3116) where navigating File Picker from Category edit page caused  PHP error
- [Error](https://github.com/ExpressionEngine/ExpressionEngine/pull/3142/commits/66a49d823363edb22dbdb5d9c1317e486ecb9521) with empty custom member fields
- [Improved preformance](https://github.com/ExpressionEngine/ExpressionEngine/pull/3142/commits/5754ec61854633ae30fcafb5cbd4b8778af174d1) on member list tag
- Additional Role checks on creation
- Additional PHP 8.2 support

**Developers** 💻

- Resolved [#3069](https://github.com/ExpressionEngine/ExpressionEngine/issues/3069) where `ChannelField` model could not be saved without `field_order` property

## Version 7.2.11
(Release: March 6, 2023)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1181219?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">robinsowell</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=robinsowell" target="_BLANK">@robinsowell</a></p></div></div></div></li>
    </ul>
</div>
</div>

**Enhancements** 🚀

- Account for dictionary words when calculating password rank; [#1806](https://github.com/ExpressionEngine/ExpressionEngine/issues/1806)

**Bug Fixes** 💃🐛

- Resolved [#3048](https://github.com/ExpressionEngine/ExpressionEngine/issues/3048) where entry preview on mobile was broken
- Resolved [#3035](https://github.com/ExpressionEngine/ExpressionEngine/issues/3035) where enabling front-end editing on very complex templates could cause some tags to be not parsed
- Resolved [#3028](https://github.com/ExpressionEngine/ExpressionEngine/issues/3028) where categories tab drag-and-drop re-ordering was not working
- Resolved issue where turning on front-end editing could cause some tags to not render correctly
- Resolved issue where CKeditor table in vertical Grid didn't render correctly when creating a new entry
- Resolved [#2775](https://github.com/ExpressionEngine/ExpressionEngine/issues/2775) where approved members could have Pending as secondary role

**Developers** 💻

- Resolved [#3030](https://github.com/ExpressionEngine/ExpressionEngine/issues/3030) where property in Channel module has wrong visibility

## Version 7.2.10
(Release: February 20, 2023)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/53965?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Brian Litzinger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=litzinger" target="_BLANK">@litzinger</a></p></div></div></div></li>    
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

**Bug Fixes** 💃🐛

- Resolved [#2847](https://github.com/ExpressionEngine/ExpressionEngine/issues/2847) where some jump menu items were showing data from other MSM sites
- Resolved issue where performing post-upgrade checks could show PHP error
- Resolved issue where PHP notice could be shown on Live Preview when invoked from Entries prolet
- Resolved [#2481](https://github.com/ExpressionEngine/ExpressionEngine/issues/2481) where member count query was suboptimal
- Resolved an issue where the author filter could have a missing label.
- Resolved [#2838](https://github.com/ExpressionEngine/ExpressionEngine/issues/2838) where the new related entry modal generates JS errors
- Resolved issue when saving Grid field from third-party code could behave incorrectly
- Resolved [#2233](https://github.com/ExpressionEngine/ExpressionEngine/issues/2233) where cloning entry without comments could generate PHP deprecation notices
- Resolved [#2829](https://github.com/ExpressionEngine/ExpressionEngine/issues/2829) where entry search in mobile view was not working

## Version 7.2.9
(Release: February 7, 2023)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/109251940?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Stephen Galbraith</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=nerdgency" target="_BLANK">@nerdgency</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/48371903?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Paul L Varner</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=projectnoontide" target="_BLANK">@projectnoontide</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

**Bug Fixes** 💃🐛
- Resolved [#2312](https://github.com/ExpressionEngine/ExpressionEngine/issues/2312) where conditional fields depending on radio button could be not loaded correctly when creating new entry
- Resolved [#2765](https://github.com/ExpressionEngine/ExpressionEngine/issues/2765) where using `ee()->table->set_data()` was not possible outside of Control Panel
- Resolved [#2356](https://github.com/ExpressionEngine/ExpressionEngine/issues/2356) where Preview button was still visible when preview turned off in channel preferences
- Resolved [#2808](https://github.com/ExpressionEngine/ExpressionEngine/issues/2808) where some servers did not accept SVG files to be uploaded into image-only directory
- Resolved [#2653](https://github.com/ExpressionEngine/ExpressionEngine/issues/2653) where Radio and Select fields were showing values and not labels in Entry Manager
- Resolved [#2784](https://github.com/ExpressionEngine/ExpressionEngine/issues/2784) where having ungrouped fields could cause group filter to malfunction in Field manager
- Resolved issue when password validation did not work properly in some cases

## Version 7.2.8
(Release: January 30, 2023)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

**Enhancements** 🚀
- Added options for different display layouts for File Grid fields; #2764
- Added initial PHP 8.2 compatibility

**Bug Fixes** 💃🐛
- Resolved issue when files on non-local filesystem could not be resized or cropped from CP
- Resolved [#2759](https://github.com/ExpressionEngine/ExpressionEngine/issues/2759) where checkbox field with the name of "statuses" did not always render correctly
- Resolved [#2758](https://github.com/ExpressionEngine/ExpressionEngine/issues/2758) where reordering did not always work properly in third-party grids
- Resolved [#2761](https://github.com/ExpressionEngine/ExpressionEngine/issues/2761) where Structure could show PHP warning when used with third-party forms
- Resolved issue where validation error was not properly thrown when saving a Grid in a Pro Variable
- Resolved issue where saving Fluid without fields could result in PHP error

## Version 7.2.7
(Release: January 17, 2023)

- **Enhancements** 🚀
  - Added ability to set template engine in template manager

- **Bug Fixes** 💃🐛
  - Resolved [#2759](https://github.com/ExpressionEngine/ExpressionEngine/issues/2759) where checkbox field with the name of "statuses" does not render correctly
  - Resolved [#2661](https://github.com/ExpressionEngine/ExpressionEngine/issues/2661) where is was not possible to search template group and template at the same time in Pages tab
  - Resolved [#2437](https://github.com/ExpressionEngine/ExpressionEngine/issues/2437) where building Pro Search Collection via URL did not work properly
  - Resolved [#2667](https://github.com/ExpressionEngine/ExpressionEngine/issues/2667) where errors for password resetting were not shown properly
  - Resolved [#2739](https://github.com/ExpressionEngine/ExpressionEngine/issues/2739) where PHP notice could have been shown when accessing plugin documentation when using PHP 8.1
  - Resolved issue where Channel Form grid has extra unneeded column
  - Resolved [#2735](https://github.com/ExpressionEngine/ExpressionEngine/issues/2735) where Text Formatter could show deprecation notices when using PHP 8.1

## Version 7.2.6
(Release: January 10, 2023)

NOTE: **Important:** This version includes important security updates.

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/17011377?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Brad Akin</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bakin1999" target="_BLANK">@bakin1999</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/53965?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Brian Litzinger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=litzinger" target="_BLANK">@litzinger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/6020323?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Doug Black Jr</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=dougblackjr" target="_BLANK">@dougblackjr</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/422821?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Tom Jaeger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=TomJaeger" target="_BLANK">@TomJaeger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1181219?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">robinsowell</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=robinsowell" target="_BLANK">@robinsowell</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Enhancements** 🚀
  - Add additional HTML elements to CP stylesheet; [#2685](https://github.com/ExpressionEngine/ExpressionEngine/issues/2685)
  - Allow swatches in Colorpicker fieldtype to have names
  - Retain pagination and filters on Entry Manager page after saving & closing entry; [#111](https://github.com/ExpressionEngine/ExpressionEngine/issues/111)
  - Improved Pro Search collections page UI
  - Resolved [#2658](https://github.com/ExpressionEngine/ExpressionEngine/issues/2658) where some parameters were not available for member management forms 

- **Bug Fixes** 💃🐛
  - Resolved [#2663](https://github.com/ExpressionEngine/ExpressionEngine/pull/2663) where forgot password form could generate erroneous reset URLs
  - Resolved [#2500](https://github.com/ExpressionEngine/ExpressionEngine/pull/2500) where reordering Grid with images had some issues
  - Resolved [#2571](https://github.com/ExpressionEngine/ExpressionEngine/pull/2571) where using `exp:channel:categories` with no categories assigned could show PHP warning
  - Resolves issue with using lang entries in CLI command 
  - Resolved issue with View Type preference not properly encoded 
  - Resolved issue where Pro Search filters were using Low Search naming
  - Resolved [#2679](https://github.com/ExpressionEngine/ExpressionEngine/pull/2679)where password validation URL was giving PHP error

- **Developers** 💻
  - Added CLI command to generate jump files for add-ons

- **Security** 🔒
  - Removed possibility for RCE vulnerability for authenticated CP user

## Version 7.2.5
(Release: December 20, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Enhancements** 🚀
  - Enabled renaming custom tabs in publish layouts; [#792](https://github.com/ExpressionEngine/ExpressionEngine/issues/792)
  - Added system config override for font size in EE code editors; [#921](https://github.com/ExpressionEngine/ExpressionEngine/issues/921)
  - Added per-channel setting for entry title instructions; [#1790](https://github.com/ExpressionEngine/ExpressionEngine/issues/1790)
  - Updated custom add-on development methodology. (See [Add-on Development Overview](/development/addon-development-overview.md) )


- **Bug Fixes** 💃🐛
  - Resolved [#2500](https://github.com/ExpressionEngine/ExpressionEngine/issues/2500) where reordering Grid with images had some issues
  - Resolved [#791](https://github.com/ExpressionEngine/ExpressionEngine/issues/791) where deleting tab when editing publish layout could cause page reload
  - Resolved [#786](https://github.com/ExpressionEngine/ExpressionEngine/issues/786) where page moved to the top after saving new entry in a relationships modal
  - Resolved [#2622](https://github.com/ExpressionEngine/ExpressionEngine/issues/2622) where deleting several legacy channel fields could cause MySQL error

- **Developers** 💻
  - Created CLI command make:fieldtype
  - Created CLI command make:cp-route
  - Created CLI command make:sidebar
  - Renamed CLI command to make:tag to make:template-tag
  - Overall improvements in several add-on related CLI commands
  - Improved several add-on service classes
  - Fixed bugs with several CLI commands
  - Fixed a few bugs with add-on service classes

## Version 7.2.4
(Release: December 13, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/839534?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Martin D</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=martinduparc" target="_BLANK">@martinduparc</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Enhancements** 🚀
  - Reduced the amounts of queries when using a relationship field.
  - Added update date in success message after saving an entry. ([#1157](https://github.com/ExpressionEngine/ExpressionEngine/issues/1157))
  - Added ability to skip success message after submitting email contact form. ([#1034](https://github.com/ExpressionEngine/ExpressionEngine/issues/1034))
  - Increased performance of File Manager when attempting to load thousands of files. ([#2564](https://github.com/ExpressionEngine/ExpressionEngine/issues/2564))
  - Added confirmation toggle to keep or remove files when removing upload directory. ([#2623](https://github.com/ExpressionEngine/ExpressionEngine/issues/2623))



- **Bug Fixes** 💃🐛
  - Resolved [#2577](https://github.com/ExpressionEngine/ExpressionEngine/issues/2577) where Control Panel entry pages have missing .map files.
  - Resolved [#1541](https://github.com/ExpressionEngine/ExpressionEngine/issues/1541) where permission check for editing categories was not sufficient.
  - Fixed language variable collision with Structure.
  - Resolved [#2080](https://github.com/ExpressionEngine/ExpressionEngine/issues/2080) where Comments column was shown in Entry Manager when Comment module is disabled.
  - Resolved [#2608](https://github.com/ExpressionEngine/ExpressionEngine/issues/2608) where the order in which the categories are displayed on the publish page does not match the actual order from the Categories Manager page.
  - Resolved [#2621](https://github.com/ExpressionEngine/ExpressionEngine/issues/2621) where `{exp:channel:entries orderby="view_count_one"}` when used on category page could throw error on MySQL 5.7.
  - Resolved [#2500](https://github.com/ExpressionEngine/ExpressionEngine/issues/2500) Where grid reordering with images is buggy.


- **Developers** 💻
  - Them template type hook is now called only when EE is fully loaded.



## Version 7.2.3
(Release: December 6, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛
  - Resolved [#2041](https://github.com/ExpressionEngine/ExpressionEngine/issues/2041) where it was difficult to see which option in a selectable field was selected.
  - Resolved [#1527](https://github.com/ExpressionEngine/ExpressionEngine/issues/1527) where using modifier on `category_name` variable could cause PHP error.
  - Resolved issue where version block in the sidebar was not indicating a new version was available. 
  - Resolved [#2553](https://github.com/ExpressionEngine/ExpressionEngine/issues/2553) where `{exp:channel:entries}` output could miss some results on MSM installations with duplicate channel names.
  - Resolved form validation bug in the CLI.


## Version 7.2.2
(Release: November 28, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/422821?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">TomJaeger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=TomJaeger" target="_BLANK">@TomJaeger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Enhancements** 🚀
  - Added `{logged_in_primary_role_short_name}` global member variable; [#2491](https://github.com/ExpressionEngine/ExpressionEngine/issues/2491)
  - Added inline error handling for member registration form

- **Bug Fixes** 💃🐛
  - Resolved [#2107](https://github.com/ExpressionEngine/ExpressionEngine/issues/2107) where Cookie Consents were not fully installed when updating from EE2
  - Resolved [#2439](https://github.com/ExpressionEngine/ExpressionEngine/issues/2439) where channel form CSS link was returning 404 error 
  - Resolved [#2532](https://github.com/ExpressionEngine/ExpressionEngine/issues/2532) where Edit Profile form could show error when used on same page with channel entries tag 
  - Resolved issue where calculating file usage could show a PHP error if some upload destinations were missing
  - Resolved [#2525](https://github.com/ExpressionEngine/ExpressionEngine/issues/2525) where using `channel="not ..."` parameter was returning no results on `{exp:channel:entries}`
  - Resolved [#2497](https://github.com/ExpressionEngine/ExpressionEngine/issues/2361) where `categories` parameter did not work on relationship `siblings` and `parents` tags 
  - Resolved [#2505](https://github.com/ExpressionEngine/ExpressionEngine/issues/2505) where Stats module could show a PHP error when using PHP 8.1
  - Resolved [#2550](https://github.com/ExpressionEngine/ExpressionEngine/issues/2550) where Pro Search did not store IPv6 addresses correctly
  - Resolved [#2432](https://github.com/ExpressionEngine/ExpressionEngine/issues/2432) where some Structure queries were slow on large websites
  - Resolved bug when creating generic migrations using the CLI
  - Fixed some CP styles
  - Fixed some PHP 8.1 compatibility issues

## Version 7.2.1
(Release: November 21, 2022)

<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li></ul>
</div>
</div>


- **Developers** 💻
  - Allow raw data to be set on template library.


## Version 7.2.0
(Release: October 26, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/48652147?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">CreepCaster</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=CreepCaster" target="_BLANK">@CreepCaster</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1008036?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Eric Lamb</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=mithra62" target="_BLANK">@mithra62</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/25546953?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Thomas Knaller</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=tknaller" target="_BLANK">@tknaller</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1181219?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">robinsowell</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=robinsowell" target="_BLANK">@robinsowell</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Enhancements** 🚀
  - Added ability to edit related entries content from relationship field; [#656](https://github.com/ExpressionEngine/ExpressionEngine/issues/656)
  - Added extra confirmation toggle when deleting fieldtype that is used by fields; [#484](https://github.com/ExpressionEngine/ExpressionEngine/issues/484)
  - Added visual indication when viewing entry version; [#1897](https://github.com/ExpressionEngine/ExpressionEngine/issues/1897)
  - Show in which channels field is used on field edit page; [#919](https://github.com/ExpressionEngine/ExpressionEngine/issues/919)
  - Enabled entering HTML line break tags into Entry Title fiels; [#1633](https://github.com/ExpressionEngine/ExpressionEngine/issues/1633)
  - Added "Upload Directory" column for File Manager table; [#98](https://github.com/ExpressionEngine/ExpressionEngine/issues/98)
  - Added "ungrouped" as a filter to the list of Fields; [#516](https://github.com/ExpressionEngine/ExpressionEngine/issues/516)
  - Changed the redirect upon field edit to field group list, if the field is in group; [#258](https://github.com/ExpressionEngine/ExpressionEngine/issues/258)
  - Updated CKEditor and Redactor to recent versions
  - Enabled extended configuration of RTE toolsets using JSON; [#1465](https://github.com/ExpressionEngine/ExpressionEngine/issues/1465)
  - Enable using external stylesheet in RTE fields; [#1425](https://github.com/ExpressionEngine/ExpressionEngine/issues/1425)
  - Support RTL text direction in Rich Text fields; [#1981](https://github.com/ExpressionEngine/ExpressionEngine/issues/1981)
  - Moved the selected checkboxes to the top of the list if the list is too long; [#653](https://github.com/ExpressionEngine/ExpressionEngine/issues/653)
  - Enable including database views into backups
  - Added new CLI commands for generating add-on [Actions](cli/built-in-commands/make-action.md), [Tags](cli/built-in-commands/make-tag.md), and [Extension Hooks](cli/built-in-commands/make-extension-hook.md)
  - Added compatibility-mode flag to `make:addon` CLI command

- **Bug Fixes** 💃🐛
  - Resolved [#2438](https://github.com/ExpressionEngine/ExpressionEngine/issues/2438) where Low Variable types were not migrated properly to Pro Variable types
  - Resolved [#1249](https://github.com/ExpressionEngine/ExpressionEngine/issues/1249) where image was not inserted into correct place in textarea field
  - Resolved [#2431](https://github.com/ExpressionEngine/ExpressionEngine/issues/2431) where Image HTML button should not have been editable
  - Resolved [#2430](https://github.com/ExpressionEngine/ExpressionEngine/issues/2430) where editing template by member without settings & access permission was resetting allowed roles
  - Resolved [#2410](https://github.com/ExpressionEngine/ExpressionEngine/issues/2410) where some fieldtypes could not be used as columns in Entry Manager
  - Resolved [#2361](https://github.com/ExpressionEngine/ExpressionEngine/issues/2361) where Redactor toolbar was hidden behind entry tabs when sticked to the top of the screen
  - Resolved [#2403](https://github.com/ExpressionEngine/ExpressionEngine/issues/2403) where clickable area for checkboxes was too large
  - Resolved [#2411](https://github.com/ExpressionEngine/ExpressionEngine/issues/2411), [#2412](https://github.com/ExpressionEngine/ExpressionEngine/issues/2412) where filepicker was not always working outside of File field
  - Resolved issue where File link was not in navigation sidebar for some members with proper permissions
  - Resolved issue where empty edit buttons were present for sidebar elements that member does not have access to edit
  - Resolved [#2437](https://github.com/ExpressionEngine/ExpressionEngine/issues/2437) where horizontal grid fields could go outside the container
  - Resolved [#2435](https://github.com/ExpressionEngine/ExpressionEngine/issues/2435) when having two Pro Search results tags with `keywords:stem` parameter on same page caused PHP error
  - Resolved issue where reCaptcha threshold was not checked correctly
  - Resolved [#2484](https://github.com/ExpressionEngine/ExpressionEngine/issues/2484) where FTP library was not working properly on PHP 8.1


- **Developers** 💻
  - New [Add-on Classes](development/best-practices/about.md)
  - `make:addon` CLI command now generates add-on's with Add-on controller classes

## Version 7.1.6
(Release: September 26, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1181219?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">robinsowell</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=robinsowell" target="_BLANK">@robinsowell</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛
  - Resolved issue when saving some member profile settings could show PHP error when using PHP 8
  - Resolved [#2363](https://github.com/ExpressionEngine/ExpressionEngine/issues/2363) where reordering fields in Channel Layouts did not work properly 
  - Resolved [#2390](https://github.com/ExpressionEngine/ExpressionEngine/issues/2390) where File Picker was not working if no file field was present on page 
  - Resolved [#2393](https://github.com/ExpressionEngine/ExpressionEngine/issues/2393) where replacing file with existing manipulations could generate PHP error 
  - Resolved issue where entries could be not displayed on front-end if channel name also existed on other MSM site
  - Resolved [#2395](https://github.com/ExpressionEngine/ExpressionEngine/issues/2395) where deleting directory might not work correctly on some environments
  - Resolved issue where PHP error could be shown after update if templates are not synchronized
  - Resolved issue where `search` parameter on `exp:channel:entries` tag could only be used once

## Version 7.1.5
(Release: September 13, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/17239151?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">igreil</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=igreil" target="_BLANK">@igreil</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛
  - Resolved issue where File Manager page was not updated after uploading SVG file 
  - Resolved [#2375](https://github.com/ExpressionEngine/ExpressionEngine/issues/2375) where Profiler section in CP had some English words hardcoded
  - Resolved [#2366](https://github.com/ExpressionEngine/ExpressionEngine/issues/2366) where is was not possible to use title in search parameter of `exp:channel:entries` tag 
  - Resolved [#1651](https://github.com/ExpressionEngine/ExpressionEngine/issues/1651) where dropdowns in File field were showing the directories that member was not allowed to access
  - Resolved issue where displaying entry with file fields could be slow
  - Resolved issue where file management on servers with `open_basedir` restrictions could give PHP errors
  - Resolved issue where Grid fields with many columns were not rendered properly on page load

## Version 7.1.4
(Release: September 6, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/17011377?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bradford Akin</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bakin1999" target="_BLANK">@bakin1999</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
    </ul>
</div>
</div>


- **Bug Fixes** 💃🐛
  - Resolved [#2298](https://github.com/ExpressionEngine/ExpressionEngine/issues/2298) where Publish Layouts were not accessible for member via secondary role
  - Resolved [#2104](https://github.com/ExpressionEngine/ExpressionEngine/issues/2104) where opening link in new tab could falsely alert about leaving the page 
  - Resolved [#2135](https://github.com/ExpressionEngine/ExpressionEngine/issues/2135) where categories were not parsed in related categories mode
  - Resolved [#1541](https://github.com/ExpressionEngine/ExpressionEngine/issues/1541) where some fields connected to toggle button were not showing or hiding accordingly
  - Resolved [#185](https://github.com/ExpressionEngine/ExpressionEngine/issues/185) where anchor "name" attribute was getting incorrect prefix in third-party textareas inside Grid
  - Resolved [#2128](https://github.com/ExpressionEngine/ExpressionEngine/issues/2128) where settings of Checkboxes column in Grid field were not saved
  - Resolved [#2348](https://github.com/ExpressionEngine/ExpressionEngine/issues/2348) where saving entry could show PHP error when using PHP 8.1 
  - Resolved [#2360](https://github.com/ExpressionEngine/ExpressionEngine/issues/2360), [#2303](https://github.com/ExpressionEngine/ExpressionEngine/issues/2303) where certain server configuration were giving PHP error that caused file management to not function properly
  - Resolved [#2122](https://github.com/ExpressionEngine/ExpressionEngine/issues/2122) where Live Preview was not working correctly when template was using search on checkboxes column in Grid
  - Resolved [#2285](https://github.com/ExpressionEngine/ExpressionEngine/issues/2285) where exception shown after creating select field populating from other field, but no source field selected

## Version 7.1.3
(Release: September 1, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
    </ul>
</div>
</div>


- **Bug Fixes** 💃🐛
  - Resolved [#2331](https://github.com/ExpressionEngine/ExpressionEngine/issues/2331) where saving template revision was causing SQL error when using long table prefix
  - Resolved [#2335](https://github.com/ExpressionEngine/ExpressionEngine/issues/2335) where having references to non-existing files in File field could case PHP error in Entry Manager listing
  - Resolved [#2116](https://github.com/ExpressionEngine/ExpressionEngine/issues/2116) where disabling MFA globally could cause redirect loop on login for some users
  - Resolved [#2279](https://github.com/ExpressionEngine/ExpressionEngine/issues/2279) where ColorPicker dropdown was not visible in new Grid rows
  - Resolved [#2131](https://github.com/ExpressionEngine/ExpressionEngine/issues/2131), [#913](https://github.com/ExpressionEngine/ExpressionEngine/issues/913) where moving fields between tabs in Channel Layouts did not work well
  - Resolved [#2121](https://github.com/ExpressionEngine/ExpressionEngine/issues/2121) where hitting esc in New Entry slideout modal could case data loss
  - Resolved [#2338](https://github.com/ExpressionEngine/ExpressionEngine/issues/2338) where vertical layout was not fully supported by Grid in Pro Variables
  - Resolved [#2340](https://github.com/ExpressionEngine/ExpressionEngine/issues/2340) where Pro Variables of Grid type could show PHP notice on frontend
  - Resolved issue when files could not be uploaded on certain server configurations

## Version 7.1.2
(Release: August 22, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/17785714?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Jonathan Hardisty</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=jHards" target="_BLANK">@jHards</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Enhancements** 🚀
  - Added support for `form_class` parameter in legacy Forgot Password Form

- **Bug Fixes** 💃🐛
  - Resolved issue when member role record was not deleted after deleting member
  - Resolved issue when URLs to files with special characters in name were not properly encoded
  - Resolved [#2126](https://github.com/ExpressionEngine/ExpressionEngine/issues/2126) where "add field" button was present for field groups that are not saved yet
  - Resolved [#2076](https://github.com/ExpressionEngine/ExpressionEngine/issues/2076), [#2141](https://github.com/ExpressionEngine/ExpressionEngine/issues/2141) where button to update template routes was missing some functionality
  - Resolved [#1901](https://github.com/ExpressionEngine/ExpressionEngine/issues/1901) where add-ons with related models were not properly uninstalled
  - Resolved [#2109](https://github.com/ExpressionEngine/ExpressionEngine/issues/2109) where loading third-party dashboard widgets could cause PHP error
  - Resolved [#2255](https://github.com/ExpressionEngine/ExpressionEngine/issues/2255) where "Anonymize Consent Logs" feature was not fully functional
  - Resolved [#2297](https://github.com/ExpressionEngine/ExpressionEngine/issues/2297) where deferring relationship field was not working for fields with data
  - Resolved [#2279](https://github.com/ExpressionEngine/ExpressionEngine/issues/2279) where ColorPicker field did not display saved values


## Version 7.1.1
(Release: August 19, 2022)

- **Bug Fixes** 💃🐛
  - Resolved issue where license check could return incorrect results
  - Resolved [#2263](https://github.com/ExpressionEngine/ExpressionEngine/issues/2208) where the instructions for adding IP to Blocked list were not correct
  - Minor UI updates

## Version 7.1.0
(Release: August 18, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/13821249?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Gavin * JCOGS</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=jcogs-design" target="_BLANK">@jcogs-design</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/53965?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Brian Litzinger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=litzinger" target="_BLANK">@litzinger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/35812875?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Gilbert</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=gilbert-hop" target="_BLANK">@gilbert-hop</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/931642?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Sobral</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=robsonsobral" target="_BLANK">@robsonsobral</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/14606?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Daniel Jalkut</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=danielpunkass" target="_BLANK">@danielpunkass</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/194579?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Andy Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=ajohnson" target="_BLANK">@ajohnson</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1181219?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">robinsowell</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=robinsowell" target="_BLANK">@robinsowell</a></p></div></div></div></li>
    </ul>
</div>
</div>


- **Enhancements** 🚀
  - Added Structure as first-party add-on, shipped with ExpressionEngine
  - Added indicator to display number of installed add-ons, [#1944](https://github.com/ExpressionEngine/ExpressionEngine/issues/1944)
  - Added `edit_date` column in Entry Manager, [#1850](https://github.com/ExpressionEngine/ExpressionEngine/issues/1850)
  - Added possibility to defer initialization of Relationship field
  - Added support for table alias in SQL joins when using Active Record, [#2096](https://github.com/ExpressionEngine/ExpressionEngine/issues/2096)
  - Enable `exp:search:total_results` to be parsed as tag pair, [#1193](https://github.com/ExpressionEngine/ExpressionEngine/issues/1193)
  - Added `has_children` variable to category tags, [#1726](https://github.com/ExpressionEngine/ExpressionEngine/issues/1726)
  - Various UI improvements

- **Bug Fixes** 💃🐛
  - Resolved [#1561](https://github.com/ExpressionEngine/ExpressionEngine/issues/1561) where file column in file grid field was not searchable
  - Resolved issue when PHP error was shown for non-existing addons
  - Resolved [#2157](https://github.com/ExpressionEngine/ExpressionEngine/issues/2157) where Color Picker field was cut off when used inside Grid field
  - Resolved [#2279](https://github.com/ExpressionEngine/ExpressionEngine/issues/2279) where ColorPicker fields were not initialized on page load
  - Resolved [#2115](https://github.com/ExpressionEngine/ExpressionEngine/issues/2115) where conditional validation did not work properly on existing objects
  - Resolved [#2136](https://github.com/ExpressionEngine/ExpressionEngine/issues/2136) where formatters for duration field set to hours type were not parsed properly
  - Resolved [#2105](https://github.com/ExpressionEngine/ExpressionEngine/issues/2105) where adding new row for File Grid inside Fluid could cause validation error
  - Resolved issue where PHP notice could be shown when calling Template library from an add-on
  - Resolved [#2127](https://github.com/ExpressionEngine/ExpressionEngine/issues/2117) where there was a typo in definition of Extension model
  - Resolved [#2248](https://github.com/ExpressionEngine/ExpressionEngine/issues/2248) where emphasized markdown was placed in separate line inside Notes field
  - Resolved [#2103](https://github.com/ExpressionEngine/ExpressionEngine/issues/2103) where value column of conditional field settings could be populated with wrong values
  - Resolved [#2228](https://github.com/ExpressionEngine/ExpressionEngine/issues/2228) where dropdown to create entry inside Relationship field was not positioned properly
  - Resolved [#2063](https://github.com/ExpressionEngine/ExpressionEngine/issues/2063) where outdated resources could be served
  - Resolved issue where MetaWeblog could not post if channel_id is not available
  - Resolved [#1358](https://github.com/ExpressionEngine/ExpressionEngine/issues/1358) where setting CP Homepage for member could cause PHP error on large sites using MSM
  - Resolved issue when sometimes avatar could not be uploaded on frontend

- **Developers** 💻
  - Added extension hook to be executed upon cache clearing, [#1762](https://github.com/ExpressionEngine/ExpressionEngine/issues/1762)

## Version 7.0.3
(Release: August 8, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛
  - Fixed issue where Update File Usage utility was not always giving correct results.
  - Resolved issue where files in subfolder were not stored properly in RTE field using Redactor.
  - Resolved [#2208](https://github.com/ExpressionEngine/ExpressionEngine/issues/2208) where language files for some add-ons were not placed in correct location.
  - Resolved issue where Grid inside Fluid was not empty initially
  - Resolved issue where filtering by member group in channel form could result in SQL error

## Version 7.0.2
(Release: August 4, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
    </ul>
</div>
</div>

- Temporarily disabled Update File Usage utility due to a bug that affected some users. Utility will be re-enabled in 7.0.3

- **Bug Fixes** 💃🐛
  - Fixed issue with file usage stats.

## Version 7.0.1
(Release: August 4, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/55093827?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Andy McCormick</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=ops-andy" target="_BLANK">@ops-andy</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛
  - Resolved issue where Update File Usage utility did not provide correct results when run for second time.
  - Resolved issue where URLs to files in subfolder were not parsed in {exp:file:entries} tag.
  - Resolved issue where Pro Variables and Pro Search could not be installed on some PHP versions.


## Version 7.0.0
(Release: August 3, 2022)

NOTE:**Note:** If multiple members are needed, an ExpressionEngine Pro license is now required.

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/194579?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Andy Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=ajohnson" target="_BLANK">@ajohnson</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/55093827?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Andy McCormick</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=ops-andy" target="_BLANK">@ops-andy</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/422821?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">TomJaeger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=TomJaeger" target="_BLANK">@TomJaeger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1181219?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">robinsowell</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=robinsowell" target="_BLANK">@robinsowell</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/13821249?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Gavin * JCOGS</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=jcogs-design" target="_BLANK">@jcogs-design</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1008036?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Eric Lamb</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=mithra62" target="_BLANK">@mithra62</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/45797159?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Stephen G</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=stephengalbraith" target="_BLANK">@stephengalbraith</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/4128963?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Blair</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=blairliikala" target="_BLANK">@blairliikala</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **New File Manager** 🗃️
  - New File Manager design including the additions to [Filters](/control-panel/file-manager/file-manager.md#filters) and [Views](/control-panel/file-manager/file-manager.md#view-options)
  - Added utility action menu to files in the File Manager, allowing for quicker actions to be taken on individual files
  - Added Pop-up preview to thumbnails when viewing files in list view
  - Ability to upload files with drag and drop.
  - Bulk upload files using drag and drop or standard file sytem upload
  - Ability to organize content into [subfolders](/control-panel/file-manager/subfolders.md)
  - Folders can now be created directly on the filesystem through the File Manager
  - Implemented [FlySystem PHP library](https://flysystem.thephpleague.com/docs/) to add more extensiblity to the File Manager.
  - Added support for cloud based file storage through [Adapters](/control-panel/file-manager/adapters.md)
  - Changed how files are referenced in the database. Previously files were referenced using `{filedir_X}filename.ext`. Files are now referenced using `{file:XX:url}`. [Compatiblity Mode](/control-panel/file-manager/file-manager.md#compatibility-mode) is recommended for upgrades until there is confirmation that all add-ons will work with new file data format.
  - File usage is now available in the File Manager to display where a file is used throughout the Control Panel as well as notify users if a file is in use before deleting the file

- **Enhancements** 🚀
  - Added [Front-End Content Management](/advanced-usage/front-end/overview.md) (including Front-End Editing, the Dock, and Prolets)
  - Added [Multi-Factor Authentication](/member/mfa.md)
  - Added Cookie Management and template tags
  - Added [Entry Cloning](/channels/entry_cloning.md)
  - Added the ability to create [Custom Dashboard Widgets](/control-panel/dashboard_management.md#dashboard-management)
  - Added the ability to upload a [Logo and Favicon](/control-panel/settings/branding.md) for the Control Panel.
  - Added Pro Search (formerly Low Search)
  - Added Pro Variables (form Low Variables)
  - Major Performance enhancements across the Control Panel and Front-End
  - Added `CP/Form` object layer to generate Shared Form arrays; [#2101](https://github.com/ExpressionEngine/ExpressionEngine/issues/2101)
  

- **Design** 🎨
  - Added new light theme. ExpressionEngine 6 theme is still available as the "slate" theme using the Jump Menu
  - Added the option to display Grid fields vertically
  - Added the ability to position Entry Editor fields side-by-side using Publish Layouts
  - Made the secondary sidebar collapsable throughout the Control Panel



- **Bug Fixes** 💃🐛

- **Developers** 💻
  - Forum Add-on has now been removed from ExpressionEngine and made a downloadable add-on from the ExpressionEngine Store. On upgrades which use the Forum Add-on, the add-on will be moved from the `ee/addons` folder to `user/addons` and considered a user installed add-on.
  - Simple Commerce Add-on has now been removed from ExpressionEngine and made a downloadable add-on from the ExpressionEngine Store. On upgrades which use the Simple Commerce Add-on, the add-on will be moved from the `ee/addons` folder to `user/addons` and considered a user installed add-on.
  - Ip to Nation Add-on has now been removed from ExpressionEngine and made a downloadable add-on from the ExpressionEngine Store. On upgrades which use the Ip to Nation Add-on, the add-on will be moved from the `ee/addons` folder to `user/addons` and considered a user installed add-on.
  - The included version of jQuery used in the Control Panel has been updated to v3.6.0
  - Added the option to [globablly cache](/channels/entries.html#cache-refresh-cache_prefix) Channel Entries tag results
  - Added [ENV File Support](/advanced-usage/env-support.md)
  - Added new Shared Form View 
