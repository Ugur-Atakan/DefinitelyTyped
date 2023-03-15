// Type definitions for @nginstack/web-framework 70.0
// Project: https://dev.azure.com/nginstack/nginstack
// Definitions by: Renato Ribeiro <https://github.com/Henato>
//                 Paulo Moreno <https://github.com/paulocmoreno>
//                 Ricardo Cavalcante <https://github.com/oficial>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3
/// <reference path="keys/Classes.d.ts" />
/// <reference path="keys/Files.d.ts" />
/// <reference path="keys/MimeTypes.d.ts" />
/// <reference path="keys/Processes.d.ts" />
/// <reference path="keys/Relations.d.ts" />
/// <reference path="keys/Scripts.d.ts" />
/// <reference path="keys/UserAgents.d.ts" />
/// <reference path="lib/anchor/Anchor.d.ts" />
/// <reference path="lib/anchor/AnchorCollection.d.ts" />
/// <reference path="lib/anchor/Link.d.ts" />
/// <reference path="lib/audio/Audio.d.ts" />
/// <reference path="lib/button/AutoShortcutKeyMode.d.ts" />
/// <reference path="lib/button/Button.d.ts" />
/// <reference path="lib/button/ButtonTimer.d.ts" />
/// <reference path="lib/chart/ECharts.d.ts" />
/// <reference path="lib/chart/Highcharts.d.ts" />
/// <reference path="lib/classdef/CellThumbnail.d.ts" />
/// <reference path="lib/classdef/classHasGlobalActions.d.ts" />
/// <reference path="lib/classdef/DuplicateMode.d.ts" />
/// <reference path="lib/classdef/DuplicateMode.d.ts" />
/// <reference path="lib/classdef/EnterKeyAction.d.ts" />
/// <reference path="lib/classdef/FieldCalculateEvent.d.ts" />
/// <reference path="lib/classdef/getGlobalActions.d.ts" />
/// <reference path="lib/classdef/GetTreeIconEvent.d.ts" />
/// <reference path="lib/classdef/GlobalAction.d.ts" />
/// <reference path="lib/classdef/GlobalActionSet.d.ts" />
/// <reference path="lib/classdef/GridEvent.d.ts" />
/// <reference path="lib/classdef/GridFieldEvent.d.ts" />
/// <reference path="lib/classdef/GridLocateEvent.d.ts" />
/// <reference path="lib/classdef/LookupMultipleInsertEvent.d.ts" />
/// <reference path="lib/classdef/OpenKeyEvent.d.ts" />
/// <reference path="lib/classdef/TreeNodeEvent.d.ts" />
/// <reference path="lib/classdef/ViewDef.d.ts" />
/// <reference path="lib/classdef/ViewDefField.d.ts" />
/// <reference path="lib/css/CssExtractor.d.ts" />
/// <reference path="lib/css/formatInlineStyle.d.ts" />
/// <reference path="lib/css/formatLinkTag.d.ts" />
/// <reference path="lib/css/formatStyleAttr.d.ts" />
/// <reference path="lib/css/normalizeUnit.d.ts" />
/// <reference path="lib/dialogs/FormDialog.d.ts" />
/// <reference path="lib/dialogs/FormDialogField.d.ts" />
/// <reference path="lib/dialogs/SimpleDialog.d.ts" />
/// <reference path="lib/dialogs/UploadDialog.d.ts" />
/// <reference path="lib/dsv/CompositeVisualization.d.ts" />
/// <reference path="lib/dsv/CompositeVisualizationDef.d.ts" />
/// <reference path="lib/dsv/CompositeVisualizationSlot.d.ts" />
/// <reference path="lib/dsv/DataVisualization.d.ts" />
/// <reference path="lib/dsv/DataVisualizationDef.d.ts" />
/// <reference path="lib/dsv/EChartsVisualization.d.ts" />
/// <reference path="lib/dsv/EChartsVisualizationDef.d.ts" />
/// <reference path="lib/dsv/HighchartsVisualization.d.ts" />
/// <reference path="lib/dsv/HighchartsVisualizationDef.d.ts" />
/// <reference path="lib/dsv/PivotGroupType.d.ts" />
/// <reference path="lib/dsv/ReportVisualization.d.ts" />
/// <reference path="lib/dsv/ReportVisualizationColumn.d.ts" />
/// <reference path="lib/dsv/ReportVisualizationColumnDef.d.ts" />
/// <reference path="lib/dsv/ReportVisualizationColumns.d.ts" />
/// <reference path="lib/dsv/ReportVisualizationDef.d.ts" />
/// <reference path="lib/dsv/TotalAggregate.d.ts" />
/// <reference path="lib/dsv/Visualization.d.ts" />
/// <reference path="lib/dsv/VisualizationDef.d.ts" />
/// <reference path="lib/dsv/VisualizationFactory.d.ts" />
/// <reference path="lib/dsv/VisualizationFilter.d.ts" />
/// <reference path="lib/dsv/VisualizationFilterDef.d.ts" />
/// <reference path="lib/dsv/VisualizationFilters.d.ts" />
/// <reference path="lib/dsv/VisualizationFooterDef.d.ts" />
/// <reference path="lib/dsv/VisualizationHeaderDef.d.ts" />
/// <reference path="lib/dsv/VisualizationSchedulerJob.d.ts" />
/// <reference path="lib/environment/Configuration.d.ts" />
/// <reference path="lib/environment/Environment.d.ts" />
/// <reference path="lib/error/FrameworkError.d.ts" />
/// <reference path="lib/export/DataExporter.d.ts" />
/// <reference path="lib/export/DataExporterFieldDef.d.ts" />
/// <reference path="lib/export/DataSetExporter.d.ts" />
/// <reference path="lib/expression/Expression.d.ts" />
/// <reference path="lib/field-aggregator/AvgFieldAggregator.d.ts" />
/// <reference path="lib/field-aggregator/CountFieldAggregator.d.ts" />
/// <reference path="lib/field-aggregator/FieldAggregator.d.ts" />
/// <reference path="lib/field-aggregator/MaxFieldAggregator.d.ts" />
/// <reference path="lib/field-aggregator/MinFieldAggregator.d.ts" />
/// <reference path="lib/field-aggregator/SumFieldAggregator.d.ts" />
/// <reference path="lib/file-loader/DownloadFile.d.ts" />
/// <reference path="lib/file-loader/DownloadOptions.d.ts" />
/// <reference path="lib/file-loader/FileLoader.d.ts" />
/// <reference path="lib/file-loader/LoadedFile.d.ts" />
/// <reference path="lib/file-loader/UploadedFile.d.ts" />
/// <reference path="lib/file-loader/UploadOptions.d.ts" />
/// <reference path="lib/grid/BeforeSelectRecordEvent.d.ts" />
/// <reference path="lib/grid/DetailGrid.d.ts" />
/// <reference path="lib/grid/Grid.d.ts" />
/// <reference path="lib/grid/GridExporter.d.ts" />
/// <reference path="lib/grid/GridExportEvent.d.ts" />
/// <reference path="lib/grid/GridField.d.ts" />
/// <reference path="lib/grid/GridViewMode.d.ts" />
/// <reference path="lib/grid/TableViewBuffer.d.ts" />
/// <reference path="lib/grid/ToolbarVisibility.d.ts" />
/// <reference path="lib/grid/TreeExpandEvent.d.ts" />
/// <reference path="lib/html/formatImageTag.d.ts" />
/// <reference path="lib/http/FakeResponse.d.ts" />
/// <reference path="lib/ifp/ControlChannel.d.ts" />
/// <reference path="lib/label/Label.d.ts" />
/// <reference path="lib/label/LabelAlignment.d.ts" />
/// <reference path="lib/messaging/Component.d.ts" />
/// <reference path="lib/messaging/Controller.d.ts" />
/// <reference path="lib/messaging/Location.d.ts" />
/// <reference path="lib/messaging/MasterComponent.d.ts" />
/// <reference path="lib/messaging/MessageBuffer.d.ts" />
/// <reference path="lib/personalization/Environment.d.ts" />
/// <reference path="lib/personalization/Login.d.ts" />
/// <reference path="lib/personalization/MenuBar.d.ts" />
/// <reference path="lib/personalization/Theme.d.ts" />
/// <reference path="lib/personalization/UserAgent.d.ts" />
/// <reference path="lib/process/Interaction.d.ts" />
/// <reference path="lib/process/LayoutManager.d.ts" />
/// <reference path="lib/process/Process.d.ts" />
/// <reference path="lib/process/ProcessCreateEvent.d.ts" />
/// <reference path="lib/process/ProcessEvent.d.ts" />
/// <reference path="lib/process/ProcessManager.d.ts" />
/// <reference path="lib/promise/Promise.d.ts" />
/// <reference path="lib/pubsub/PubSub.d.ts" />
/// <reference path="lib/settings/newSettingsGrid.d.ts" />
/// <reference path="lib/simple-layout/Accumulator.d.ts" />
/// <reference path="lib/simple-layout/Column.d.ts" />
/// <reference path="lib/simple-layout/ColumnGroup.d.ts" />
/// <reference path="lib/simple-layout/FiltersDisplayMode.d.ts" />
/// <reference path="lib/simple-layout/Footer.d.ts" />
/// <reference path="lib/simple-layout/getSimpleLayoutCssFileKeys.d.ts" />
/// <reference path="lib/simple-layout/Header.d.ts" />
/// <reference path="lib/simple-layout/SimpleLayout.d.ts" />
/// <reference path="lib/simple-layout/SimpleLayoutExporter.d.ts" />
/// <reference path="lib/string/formatForDisplay.d.ts" />
/// <reference path="lib/vfs/extractKeyFromUrl.d.ts" />
