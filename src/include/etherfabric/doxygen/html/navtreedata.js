/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "ef_vi User Guide", "index.html", [
    [ "ef_vi", "index.html", [
      [ "Introduction", "index.html#introduction", null ]
    ] ],
    [ "What's New", "whatsnew.html", [
      [ "Bug fixes", "whatsnew.html#whatsnew_bugfixes", null ]
    ] ],
    [ "Overview", "overview.html", [
      [ "Capabilities", "overview.html#capabilities", null ],
      [ "Flexibility", "overview.html#flexibility", null ],
      [ "Scalability", "overview.html#scalability", null ],
      [ "Use cases", "overview.html#use_cases", [
        [ "Sockets acceleration", "overview.html#sockets", null ],
        [ "Packet capture", "overview.html#capture", null ],
        [ "Packet replay", "overview.html#replay", null ],
        [ "Application as an end-station", "overview.html#end_station", null ],
        [ "Software defined bridging, switching and routing", "overview.html#bridging", null ]
      ] ],
      [ "Activation requirements", "overview.html#activation_requirements", [
        [ "Using sniffing", "overview.html#sniffing", null ]
      ] ]
    ] ],
    [ "Concepts", "concepts.html", [
      [ "Virtual Interface", "concepts.html#vi", [
        [ "Virtual Interface Set.", "concepts.html#vi_sets", null ],
        [ "Event queue", "concepts.html#event_queue", null ],
        [ "Transmit descriptor ring", "concepts.html#tx_ring", null ],
        [ "Receive descriptor ring", "concepts.html#rx_ring", null ]
      ] ],
      [ "Protection Domain", "concepts.html#pd", null ],
      [ "Memory Region", "concepts.html#memory_region", null ],
      [ "Packet Buffer", "concepts.html#packet_buffer", [
        [ "Jumbo Packets", "concepts.html#jumbo", null ],
        [ "Packet Buffer Descriptor", "concepts.html#descriptor", null ]
      ] ],
      [ "Programmed I/O", "concepts.html#pio", null ],
      [ "Cut-through PIO", "concepts.html#ctpio", [
        [ "Underrun, poisoning and fallback", "concepts.html#poisoning", null ],
        [ "CTPIO diagnostics", "concepts.html#ctpio_diagnostics", null ]
      ] ],
      [ "Filters", "concepts.html#filters", [
        [ "Multiple Filters", "concepts.html#multiple_filters", null ]
      ] ],
      [ "Virtual LANs", "concepts.html#vlan", null ],
      [ "TX Alternatives", "concepts.html#tx_alternatives", null ]
    ] ],
    [ "Example Applications", "applications.html", [
      [ "eflatency", "applications.html#eflatency", [
        [ "Usage", "applications.html#eflatency_usage", null ]
      ] ],
      [ "efsend", "applications.html#efsend", null ],
      [ "efsink", "applications.html#efsink", [
        [ "Usage", "applications.html#efsink_usage", null ]
      ] ],
      [ "efforward", "applications.html#efforward", null ],
      [ "efsend_timestamping", "applications.html#efsend_timestamping", null ],
      [ "efsend_pio", "applications.html#efsend_pio", null ],
      [ "efsend_pio_warm", "applications.html#efsend_pio_warm", null ],
      [ "efsink_packed", "applications.html#efsink_packed", null ],
      [ "efforward_packed", "applications.html#efforward_packed", null ],
      [ "efrss", "applications.html#efrss", null ],
      [ "efdelegated_client", "applications.html#efdelegated_client", null ],
      [ "efjumborx", "applications.html#efjumborx", null ],
      [ "exchange", "applications.html#exchange", null ],
      [ "trader_onload_ds_efvi", "applications.html#trader_onload_ds_efvi", [
        [ "Usage", "applications.html#trader_onload_ds_efvi_usage", null ]
      ] ],
      [ "efrink_controller", "applications.html#efrink_controller", null ],
      [ "efrink_consumer", "applications.html#efrink_consumer", null ],
      [ "Building the Example Applications", "applications.html#building", null ]
    ] ],
    [ "Using ef_vi", "using.html", [
      [ "Components", "using.html#components", null ],
      [ "Compiling and Linking", "using.html#compiling", null ],
      [ "Setup", "using.html#using_setup", [
        [ "Using Virtual Interface Sets.", "using.html#using_vi_sets", null ]
      ] ],
      [ "Creating packet buffers", "using.html#using_buffers", [
        [ "Buffer Tables", "using.html#buffer_tables", null ]
      ] ],
      [ "Transmitting Packets", "using.html#using_transmit", [
        [ "Transmitting Jumbo Frames", "using.html#using_tx_jumbo", null ],
        [ "Programmed I/O", "using.html#using_pio", null ],
        [ "Cut-through PIO", "using.html#using_ctpio", null ],
        [ "TX Alternatives", "using.html#using_tx_alternatives", null ]
      ] ],
      [ "Handling Events", "using.html#using_events", [
        [ "Blocking on a file descriptor", "using.html#fd_blocking", null ]
      ] ],
      [ "Receiving packets", "using.html#using_receive", [
        [ "Finding the Packet Data", "using.html#packet_data", null ],
        [ "Receiving Jumbo Packets", "using.html#using_rx_jumbo", null ],
        [ "RX Event Merging", "using.html#using_rx_event_merging", null ]
      ] ],
      [ "Adding Filters", "using.html#using_filters", [
        [ "Filter permission requirements", "using.html#filters_permission", null ],
        [ "Filters available per Firmware Variant", "using.html#filters_variant", null ]
      ] ],
      [ "IGMP subscriptions", "using.html#using_igmp", null ],
      [ "Freeing Resources", "using.html#using_freeing", null ],
      [ "Design Considerations", "using.html#design", [
        [ "Interrupts", "using.html#interrupts", null ],
        [ "Thread Safety", "using.html#thread_safety", null ],
        [ "Packet Buffer Addressing", "using.html#pb_addressing", null ],
        [ "Virtual machines", "using.html#vm", null ]
      ] ],
      [ "Known Limitations", "using.html#limitations", [
        [ "Timestamping", "using.html#timestamping", null ],
        [ "Minimum Fill Level", "using.html#fill_level", null ]
      ] ],
      [ "Example", "using.html#using_example", null ]
    ] ],
    [ "Worked Example", "example.html", [
      [ "Setup", "example.html#example_setup", null ],
      [ "Creating Packet buffers", "example.html#example_buffers", null ],
      [ "Adding Filters", "example.html#example_filters", null ],
      [ "Receiving packets", "example.html#example_receive", null ],
      [ "Handling Events", "example.html#example_events", null ],
      [ "Transmitting packets", "example.html#example_transmit", null ]
    ] ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Data Structure Index", "classes.html", null ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", null ],
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"ef__vi_8h.html#ae6c52ae7258f201cdea370fbcf697772a8613875aa5fecb0571267d4d9183572e",
"structef__vi__stats.html#a8e4c40eac23afb00712f6607a53ebcb5"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';