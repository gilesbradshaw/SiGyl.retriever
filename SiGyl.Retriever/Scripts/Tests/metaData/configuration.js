(function() {
	define([], function() {
		return {
			getMe: function() {
				return {
					"schema": {
						"namespace": "SiGyl.Models.Areas.Configuration",
						"alias": "Self",
						"annotation:UseStrongSpatialTypes": "false",
						"xmlns:annotation": "http://schemas.microsoft.com/ado/2009/02/edm/annotation",
						"xmlns:customannotation": "http://schemas.microsoft.com/ado/2013/11/edm/customannotation",
						"xmlns": "http://schemas.microsoft.com/ado/2009/11/edm",
						"cSpaceOSpaceMapping": "[[\"SiGyl.Models.Areas.Configuration.Account\",\"SiGyl.Models.Areas.Configuration.Security.Account\"],[\"SiGyl.Models.Areas.Configuration.Alarm\",\"SiGyl.Models.Areas.Configuration.Database.Alarm\"],[\"SiGyl.Models.Areas.Configuration.Node\",\"SiGyl.Models.Areas.Configuration.Database.Node\"],[\"SiGyl.Models.Areas.Configuration.Clearance\",\"SiGyl.Models.Areas.Configuration.Security.Clearance\"],[\"SiGyl.Models.Areas.Configuration.CommandClearance\",\"SiGyl.Models.Areas.Configuration.Security.CommandClearance\"],[\"SiGyl.Models.Areas.Configuration.Command\",\"SiGyl.Models.Areas.Configuration.Security.Command\"],[\"SiGyl.Models.Areas.Configuration.Zone\",\"SiGyl.Models.Areas.Configuration.Equipment.Zone\"],[\"SiGyl.Models.Areas.Configuration.Folder\",\"SiGyl.Models.Areas.Configuration.Database.Folder\"],[\"SiGyl.Models.Areas.Configuration.Group\",\"SiGyl.Models.Areas.Configuration.Security.Group\"],[\"SiGyl.Models.Areas.Configuration.Procedure\",\"SiGyl.Models.Areas.Configuration.Recipe.Procedure\"],[\"SiGyl.Models.Areas.Configuration.Formula\",\"SiGyl.Models.Areas.Configuration.Recipe.Formula\"],[\"SiGyl.Models.Areas.Configuration.FormulaStep\",\"SiGyl.Models.Areas.Configuration.Recipe.FormulaStep\"],[\"SiGyl.Models.Areas.Configuration.BoolFormula\",\"SiGyl.Models.Areas.Configuration.Recipe.Formulae.BoolFormula\"],[\"SiGyl.Models.Areas.Configuration.BoolParameter\",\"SiGyl.Models.Areas.Configuration.Equipment.Parameters.BoolParameter\"],[\"SiGyl.Models.Areas.Configuration.BoolEnumeration\",\"SiGyl.Models.Areas.Configuration.Equipment.Parameters.Enumerations.BoolEnumeration\"],[\"SiGyl.Models.Areas.Configuration.Operation\",\"SiGyl.Models.Areas.Configuration.Equipment.Operation\"],[\"SiGyl.Models.Areas.Configuration.DoubleParameter\",\"SiGyl.Models.Areas.Configuration.Equipment.Parameters.DoubleParameter\"],[\"SiGyl.Models.Areas.Configuration.IntegerParameter\",\"SiGyl.Models.Areas.Configuration.Equipment.Parameters.IntegerParameter\"],[\"SiGyl.Models.Areas.Configuration.IntegerEnumeration\",\"SiGyl.Models.Areas.Configuration.Equipment.Parameters.Enumerations.IntegerEnumeration\"],[\"SiGyl.Models.Areas.Configuration.Report\",\"SiGyl.Models.Areas.Configuration.Equipment.Parameters.Report\"],[\"SiGyl.Models.Areas.Configuration.StringParameter\",\"SiGyl.Models.Areas.Configuration.Equipment.Parameters.StringParameter\"],[\"SiGyl.Models.Areas.Configuration.Unit\",\"SiGyl.Models.Areas.Configuration.Equipment.Unit\"],[\"SiGyl.Models.Areas.Configuration.BoolParameterNode\",\"SiGyl.Models.Areas.Configuration.Equipment.Nodes.BoolParameterNode\"],[\"SiGyl.Models.Areas.Configuration.CommandNode\",\"SiGyl.Models.Areas.Configuration.Equipment.Nodes.CommandNode\"],[\"SiGyl.Models.Areas.Configuration.DataLogNode\",\"SiGyl.Models.Areas.Configuration.Equipment.Nodes.DataLogNode\"],[\"SiGyl.Models.Areas.Configuration.DeviceInstance\",\"SiGyl.Models.Areas.Configuration.Devices.DeviceInstance\"],[\"SiGyl.Models.Areas.Configuration.Device\",\"SiGyl.Models.Areas.Configuration.Devices.Device\"],[\"SiGyl.Models.Areas.Configuration.DeviceDisplay\",\"SiGyl.Models.Areas.Configuration.Devices.DeviceDisplay\"],[\"SiGyl.Models.Areas.Configuration.DeviceInstanceDisplay\",\"SiGyl.Models.Areas.Configuration.Devices.DeviceInstanceDisplay\"],[\"SiGyl.Models.Areas.Configuration.DeviceTag\",\"SiGyl.Models.Areas.Configuration.Devices.DeviceTag\"],[\"SiGyl.Models.Areas.Configuration.DeviceInstanceTag\",\"SiGyl.Models.Areas.Configuration.Devices.DeviceInstanceTag\"],[\"SiGyl.Models.Areas.Configuration.Site\",\"SiGyl.Models.Areas.Configuration.Organisation.Site\"],[\"SiGyl.Models.Areas.Configuration.AlarmSeverity\",\"SiGyl.Models.Areas.Configuration.Database.AlarmSeverity\"],[\"SiGyl.Models.Areas.Configuration.Enterprise\",\"SiGyl.Models.Areas.Configuration.Organisation.Enterprise\"],[\"SiGyl.Models.Areas.Configuration.Application\",\"SiGyl.Models.Areas.Configuration.Sys.Application\"],[\"SiGyl.Models.Areas.Configuration.Product\",\"SiGyl.Models.Areas.Configuration.Recipe.Product\"],[\"SiGyl.Models.Areas.Configuration.Plc\",\"SiGyl.Models.Areas.Configuration.Database.Plc\"],[\"SiGyl.Models.Areas.Configuration.DoubleParameterNode\",\"SiGyl.Models.Areas.Configuration.Equipment.Nodes.DoubleParameterNode\"],[\"SiGyl.Models.Areas.Configuration.IntegerParameterNode\",\"SiGyl.Models.Areas.Configuration.Equipment.Nodes.IntegerParameterNode\"],[\"SiGyl.Models.Areas.Configuration.NodePage\",\"SiGyl.Models.Areas.Configuration.Equipment.NodePages.NodePage\"],[\"SiGyl.Models.Areas.Configuration.NodePageItem\",\"SiGyl.Models.Areas.Configuration.Equipment.NodePages.NodePageItem\"],[\"SiGyl.Models.Areas.Configuration.ReportNode\",\"SiGyl.Models.Areas.Configuration.Equipment.Nodes.ReportNode\"],[\"SiGyl.Models.Areas.Configuration.StateNode\",\"SiGyl.Models.Areas.Configuration.Equipment.Nodes.StateNode\"],[\"SiGyl.Models.Areas.Configuration.StringParameterNode\",\"SiGyl.Models.Areas.Configuration.Equipment.Nodes.StringParameterNode\"],[\"SiGyl.Models.Areas.Configuration.DoubleFormula\",\"SiGyl.Models.Areas.Configuration.Recipe.Formulae.DoubleFormula\"],[\"SiGyl.Models.Areas.Configuration.IntegerFormula\",\"SiGyl.Models.Areas.Configuration.Recipe.Formulae.IntegerFormula\"],[\"SiGyl.Models.Areas.Configuration.ProcedureStep\",\"SiGyl.Models.Areas.Configuration.Recipe.ProcedureStep\"],[\"SiGyl.Models.Areas.Configuration.UnitProcedure\",\"SiGyl.Models.Areas.Configuration.Recipe.UnitProcedure\"],[\"SiGyl.Models.Areas.Configuration.StringFormula\",\"SiGyl.Models.Areas.Configuration.Recipe.Formulae.StringFormula\"],[\"SiGyl.Models.Areas.Configuration.ScanClass\",\"SiGyl.Models.Areas.Configuration.Database.ScanClass\"],[\"SiGyl.Models.Areas.Configuration.ZoneClearance\",\"SiGyl.Models.Areas.Configuration.Security.ZoneClearance\"],[\"SiGyl.Models.Areas.Configuration.Signature\",\"SiGyl.Models.Areas.Configuration.Security.Signature\"],[\"SiGyl.Models.Areas.Configuration.AlarmValue\",\"SiGyl.Models.Areas.Configuration.Database.AlarmValue\"]]",
						"enumType": {
							"name": "DataType",
							"isFlags": "false",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Database.DataType, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"underlyingType": "Int32",
							"member": [
							  {
							  	"name": "String",
							  	"value": "0"
							  },
							  {
							  	"name": "Integer",
							  	"value": "1"
							  },
							  {
							  	"name": "Bool",
							  	"value": "2"
							  },
							  {
							  	"name": "Double",
							  	"value": "3"
							  },
							  {
							  	"name": "Unknown",
							  	"value": "4"
							  }
							]
						},
					  "association": [
						{
							"name": "CommandClearance_Clearance",
							"end": [
							  {
							  	"role": "CommandClearance_Clearance_Source",
							  	"type": "Edm.Self.CommandClearance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "CommandClearance_Clearance_Target",
							  	"type": "Edm.Self.Clearance",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "CommandClearance_Clearance_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "CommandClearance_Clearance_Source",
									"propertyRef": {
										"name": "ClearanceId"
									}
								}
							}
						},
						{
							"name": "Command_CommandClearances",
							"end": [
							  {
							  	"role": "Command_CommandClearances_Source",
							  	"type": "Edm.Self.Command",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "Command_CommandClearances_Target",
							  	"type": "Edm.Self.CommandClearance",
							  	"multiplicity": "*"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Command_CommandClearances_Source",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Command_CommandClearances_Target",
									"propertyRef": {
										"name": "CommandId"
									}
								}
							}
						},
						{
							"name": "Zone_CommandClearances",
							"end": [
							  {
							  	"role": "Zone_CommandClearances_Source",
							  	"type": "Edm.Self.Zone",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "Zone_CommandClearances_Target",
							  	"type": "Edm.Self.CommandClearance",
							  	"multiplicity": "*"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Zone_CommandClearances_Source",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Zone_CommandClearances_Target",
									"propertyRef": {
										"name": "ZoneId"
									}
								}
							}
						},
						{
							"name": "Folder_Nodes",
							"end": [
							  {
							  	"role": "Folder_Nodes_Source",
							  	"type": "Edm.Self.Folder",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "Folder_Nodes_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "*"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Folder_Nodes_Source",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Folder_Nodes_Target",
									"propertyRef": {
										"name": "FolderId"
									}
								}
							}
						},
						{
							"name": "Folder_Parent",
							"end": [
							  {
							  	"role": "Folder_Parent_Source",
							  	"type": "Edm.Self.Folder",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Folder_Parent_Target",
							  	"type": "Edm.Self.Folder",
							  	"multiplicity": "0..1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Folder_Parent_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Folder_Parent_Source",
									"propertyRef": {
										"name": "ParentId"
									}
								}
							}
						},
						{
							"name": "Folder_Zone",
							"end": [
							  {
							  	"role": "Folder_Zone_Source",
							  	"type": "Edm.Self.Folder",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Folder_Zone_Target",
							  	"type": "Edm.Self.Zone",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Folder_Zone_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Folder_Zone_Source",
									"propertyRef": {
										"name": "ZoneId"
									}
								}
							}
						},
						{
							"name": "Group_Zone",
							"end": [
							  {
							  	"role": "Group_Zone_Source",
							  	"type": "Edm.Self.Group",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Group_Zone_Target",
							  	"type": "Edm.Self.Zone",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Group_Zone_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Group_Zone_Source",
									"propertyRef": {
										"name": "ZoneId"
									}
								}
							}
						},
						{
							"name": "BoolFormula_FormulaStep",
							"end": [
							  {
							  	"role": "BoolFormula_FormulaStep_Source",
							  	"type": "Edm.Self.BoolFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BoolFormula_FormulaStep_Target",
							  	"type": "Edm.Self.FormulaStep",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "BoolFormula_FormulaStep_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "BoolFormula_FormulaStep_Source",
									"propertyRef": {
										"name": "FormulaStepId"
									}
								}
							}
						},
						{
							"name": "BoolEnumeration_Parameter",
							"end": [
							  {
							  	"role": "BoolEnumeration_Parameter_Source",
							  	"type": "Edm.Self.BoolEnumeration",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BoolEnumeration_Parameter_Target",
							  	"type": "Edm.Self.BoolParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "BoolEnumeration_Parameter_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "BoolEnumeration_Parameter_Source",
									"propertyRef": {
										"name": "ParameterId"
									}
								}
							}
						},
						{
							"name": "BoolParameter_Node",
							"end": [
							  {
							  	"role": "BoolParameter_Node_Source",
							  	"type": "Edm.Self.BoolParameter",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BoolParameter_Node_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "0..1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "BoolParameter_Node_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "BoolParameter_Node_Source",
									"propertyRef": {
										"name": "NodeId"
									}
								}
							}
						},
						{
							"name": "Operation_BoolParameters",
							"end": [
							  {
							  	"role": "Operation_BoolParameters_Source",
							  	"type": "Edm.Self.Operation",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "Operation_BoolParameters_Target",
							  	"type": "Edm.Self.BoolParameter",
							  	"multiplicity": "*"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Operation_BoolParameters_Source",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Operation_BoolParameters_Target",
									"propertyRef": {
										"name": "OperationId"
									}
								}
							}
						},
						{
							"name": "DoubleParameter_Node",
							"end": [
							  {
							  	"role": "DoubleParameter_Node_Source",
							  	"type": "Edm.Self.DoubleParameter",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DoubleParameter_Node_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "0..1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "DoubleParameter_Node_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "DoubleParameter_Node_Source",
									"propertyRef": {
										"name": "NodeId"
									}
								}
							}
						},
						{
							"name": "DoubleParameter_Operation",
							"end": [
							  {
							  	"role": "DoubleParameter_Operation_Source",
							  	"type": "Edm.Self.DoubleParameter",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DoubleParameter_Operation_Target",
							  	"type": "Edm.Self.Operation",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "DoubleParameter_Operation_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "DoubleParameter_Operation_Source",
									"propertyRef": {
										"name": "OperationId"
									}
								}
							}
						},
						{
							"name": "IntegerEnumeration_Parameter",
							"end": [
							  {
							  	"role": "IntegerEnumeration_Parameter_Source",
							  	"type": "Edm.Self.IntegerEnumeration",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "IntegerEnumeration_Parameter_Target",
							  	"type": "Edm.Self.IntegerParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "IntegerEnumeration_Parameter_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "IntegerEnumeration_Parameter_Source",
									"propertyRef": {
										"name": "ParameterId"
									}
								}
							}
						},
						{
							"name": "IntegerParameter_Node",
							"end": [
							  {
							  	"role": "IntegerParameter_Node_Source",
							  	"type": "Edm.Self.IntegerParameter",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "IntegerParameter_Node_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "0..1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "IntegerParameter_Node_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "IntegerParameter_Node_Source",
									"propertyRef": {
										"name": "NodeId"
									}
								}
							}
						},
						{
							"name": "IntegerParameter_Operation",
							"end": [
							  {
							  	"role": "IntegerParameter_Operation_Source",
							  	"type": "Edm.Self.IntegerParameter",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "IntegerParameter_Operation_Target",
							  	"type": "Edm.Self.Operation",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "IntegerParameter_Operation_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "IntegerParameter_Operation_Source",
									"propertyRef": {
										"name": "OperationId"
									}
								}
							}
						},
						{
							"name": "Report_Node",
							"end": [
							  {
							  	"role": "Report_Node_Source",
							  	"type": "Edm.Self.Report",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Report_Node_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "0..1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Report_Node_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Report_Node_Source",
									"propertyRef": {
										"name": "NodeId"
									}
								}
							}
						},
						{
							"name": "Report_Operation",
							"end": [
							  {
							  	"role": "Report_Operation_Source",
							  	"type": "Edm.Self.Report",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Report_Operation_Target",
							  	"type": "Edm.Self.Operation",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Report_Operation_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Report_Operation_Source",
									"propertyRef": {
										"name": "OperationId"
									}
								}
							}
						},
						{
							"name": "StringParameter_Node",
							"end": [
							  {
							  	"role": "StringParameter_Node_Source",
							  	"type": "Edm.Self.StringParameter",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StringParameter_Node_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "0..1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "StringParameter_Node_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "StringParameter_Node_Source",
									"propertyRef": {
										"name": "NodeId"
									}
								}
							}
						},
						{
							"name": "StringParameter_Operation",
							"end": [
							  {
							  	"role": "StringParameter_Operation_Source",
							  	"type": "Edm.Self.StringParameter",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StringParameter_Operation_Target",
							  	"type": "Edm.Self.Operation",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "StringParameter_Operation_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "StringParameter_Operation_Source",
									"propertyRef": {
										"name": "OperationId"
									}
								}
							}
						},
						{
							"name": "BoolParameterNode_Node",
							"end": [
							  {
							  	"role": "BoolParameterNode_Node_Source",
							  	"type": "Edm.Self.BoolParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BoolParameterNode_Node_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "BoolParameterNode_Node_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "BoolParameterNode_Node_Source",
									"propertyRef": {
										"name": "NodeId"
									}
								}
							}
						},
						{
							"name": "BoolParameterNode_Unit",
							"end": [
							  {
							  	"role": "BoolParameterNode_Unit_Source",
							  	"type": "Edm.Self.BoolParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BoolParameterNode_Unit_Target",
							  	"type": "Edm.Self.Unit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "BoolParameterNode_Unit_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "BoolParameterNode_Unit_Source",
									"propertyRef": {
										"name": "UnitId"
									}
								}
							}
						},
						{
							"name": "CommandNode_Node",
							"end": [
							  {
							  	"role": "CommandNode_Node_Source",
							  	"type": "Edm.Self.CommandNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "CommandNode_Node_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "CommandNode_Node_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "CommandNode_Node_Source",
									"propertyRef": {
										"name": "NodeId"
									}
								}
							}
						},
						{
							"name": "CommandNode_PermissionNode",
							"end": [
							  {
							  	"role": "CommandNode_PermissionNode_Source",
							  	"type": "Edm.Self.CommandNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "CommandNode_PermissionNode_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "0..1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "CommandNode_PermissionNode_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "CommandNode_PermissionNode_Source",
									"propertyRef": {
										"name": "PermissionNodeId"
									}
								}
							}
						},
						{
							"name": "CommandNode_Unit",
							"end": [
							  {
							  	"role": "CommandNode_Unit_Source",
							  	"type": "Edm.Self.CommandNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "CommandNode_Unit_Target",
							  	"type": "Edm.Self.Unit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "CommandNode_Unit_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "CommandNode_Unit_Source",
									"propertyRef": {
										"name": "UnitId"
									}
								}
							}
						},
						{
							"name": "DataLogNode_Node",
							"end": [
							  {
							  	"role": "DataLogNode_Node_Source",
							  	"type": "Edm.Self.DataLogNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DataLogNode_Node_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "DataLogNode_Node_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "DataLogNode_Node_Source",
									"propertyRef": {
										"name": "NodeId"
									}
								}
							}
						},
						{
							"name": "DataLogNode_Unit",
							"end": [
							  {
							  	"role": "DataLogNode_Unit_Source",
							  	"type": "Edm.Self.DataLogNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DataLogNode_Unit_Target",
							  	"type": "Edm.Self.Unit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "DataLogNode_Unit_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "DataLogNode_Unit_Source",
									"propertyRef": {
										"name": "UnitId"
									}
								}
							}
						},
						{
							"name": "DeviceDisplay_Device",
							"end": [
							  {
							  	"role": "DeviceDisplay_Device_Source",
							  	"type": "Edm.Self.DeviceDisplay",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceDisplay_Device_Target",
							  	"type": "Edm.Self.Device",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "DeviceDisplay_Device_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "DeviceDisplay_Device_Source",
									"propertyRef": {
										"name": "DeviceId"
									}
								}
							}
						},
						{
							"name": "DeviceInstanceDisplay_DeviceDisplay",
							"end": [
							  {
							  	"role": "DeviceInstanceDisplay_DeviceDisplay_Source",
							  	"type": "Edm.Self.DeviceInstanceDisplay",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceInstanceDisplay_DeviceDisplay_Target",
							  	"type": "Edm.Self.DeviceDisplay",
							  	"multiplicity": "0..1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "DeviceInstanceDisplay_DeviceDisplay_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "DeviceInstanceDisplay_DeviceDisplay_Source",
									"propertyRef": {
										"name": "DeviceDisplayId"
									}
								}
							}
						},
						{
							"name": "DeviceInstanceDisplay_DeviceInstance",
							"end": [
							  {
							  	"role": "DeviceInstanceDisplay_DeviceInstance_Source",
							  	"type": "Edm.Self.DeviceInstanceDisplay",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceInstanceDisplay_DeviceInstance_Target",
							  	"type": "Edm.Self.DeviceInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "DeviceInstanceDisplay_DeviceInstance_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "DeviceInstanceDisplay_DeviceInstance_Source",
									"propertyRef": {
										"name": "DeviceInstanceId"
									}
								}
							}
						},
						{
							"name": "Device_DeviceInstances",
							"end": [
							  {
							  	"role": "Device_DeviceInstances_Source",
							  	"type": "Edm.Self.Device",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "Device_DeviceInstances_Target",
							  	"type": "Edm.Self.DeviceInstance",
							  	"multiplicity": "*"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Device_DeviceInstances_Source",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Device_DeviceInstances_Target",
									"propertyRef": {
										"name": "DeviceId"
									}
								}
							}
						},
						{
							"name": "DeviceTag_Device",
							"end": [
							  {
							  	"role": "DeviceTag_Device_Source",
							  	"type": "Edm.Self.DeviceTag",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceTag_Device_Target",
							  	"type": "Edm.Self.Device",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "DeviceTag_Device_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "DeviceTag_Device_Source",
									"propertyRef": {
										"name": "DeviceId"
									}
								}
							}
						},
						{
							"name": "DeviceInstanceTag_DeviceInstance",
							"end": [
							  {
							  	"role": "DeviceInstanceTag_DeviceInstance_Source",
							  	"type": "Edm.Self.DeviceInstanceTag",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceInstanceTag_DeviceInstance_Target",
							  	"type": "Edm.Self.DeviceInstance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "DeviceInstanceTag_DeviceInstance_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "DeviceInstanceTag_DeviceInstance_Source",
									"propertyRef": {
										"name": "DeviceInstanceId"
									}
								}
							}
						},
						{
							"name": "DeviceInstanceTag_DeviceTag",
							"end": [
							  {
							  	"role": "DeviceInstanceTag_DeviceTag_Source",
							  	"type": "Edm.Self.DeviceInstanceTag",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceInstanceTag_DeviceTag_Target",
							  	"type": "Edm.Self.DeviceTag",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "DeviceInstanceTag_DeviceTag_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "DeviceInstanceTag_DeviceTag_Source",
									"propertyRef": {
										"name": "DeviceTagId"
									}
								}
							}
						},
						{
							"name": "DeviceInstanceTag_Node",
							"end": [
							  {
							  	"role": "DeviceInstanceTag_Node_Source",
							  	"type": "Edm.Self.DeviceInstanceTag",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceInstanceTag_Node_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "0..1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "DeviceInstanceTag_Node_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "DeviceInstanceTag_Node_Source",
									"propertyRef": {
										"name": "NodeId"
									}
								}
							}
						},
						{
							"name": "AlarmSeverity_Site",
							"end": [
							  {
							  	"role": "AlarmSeverity_Site_Source",
							  	"type": "Edm.Self.AlarmSeverity",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "AlarmSeverity_Site_Target",
							  	"type": "Edm.Self.Site",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "AlarmSeverity_Site_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "AlarmSeverity_Site_Source",
									"propertyRef": {
										"name": "SiteId"
									}
								}
							}
						},
						{
							"name": "Site_Clearances",
							"end": [
							  {
							  	"role": "Site_Clearances_Source",
							  	"type": "Edm.Self.Site",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "Site_Clearances_Target",
							  	"type": "Edm.Self.Clearance",
							  	"multiplicity": "*"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Site_Clearances_Source",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Site_Clearances_Target",
									"propertyRef": {
										"name": "SiteId"
									}
								}
							}
						},
						{
							"name": "Application_Enterprises",
							"end": [
							  {
							  	"role": "Application_Enterprises_Source",
							  	"type": "Edm.Self.Application",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "Application_Enterprises_Target",
							  	"type": "Edm.Self.Enterprise",
							  	"multiplicity": "*"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Application_Enterprises_Source",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Application_Enterprises_Target",
									"propertyRef": {
										"name": "ApplicationId"
									}
								}
							}
						},
						{
							"name": "Product_Enterprise",
							"end": [
							  {
							  	"role": "Product_Enterprise_Source",
							  	"type": "Edm.Self.Product",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Product_Enterprise_Target",
							  	"type": "Edm.Self.Enterprise",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Product_Enterprise_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Product_Enterprise_Source",
									"propertyRef": {
										"name": "EnterpriseId"
									}
								}
							}
						},
						{
							"name": "Product_Formulae",
							"end": [
							  {
							  	"role": "Product_Formulae_Source",
							  	"type": "Edm.Self.Product",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "Product_Formulae_Target",
							  	"type": "Edm.Self.Formula",
							  	"multiplicity": "*"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Product_Formulae_Source",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Product_Formulae_Target",
									"propertyRef": {
										"name": "ProductId"
									}
								}
							}
						},
						{
							"name": "Enterprise_Sites",
							"end": [
							  {
							  	"role": "Enterprise_Sites_Source",
							  	"type": "Edm.Self.Enterprise",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "Enterprise_Sites_Target",
							  	"type": "Edm.Self.Site",
							  	"multiplicity": "*"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Enterprise_Sites_Source",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Enterprise_Sites_Target",
									"propertyRef": {
										"name": "EnterpriseId"
									}
								}
							}
						},
						{
							"name": "Plc_Nodes",
							"end": [
							  {
							  	"role": "Plc_Nodes_Source",
							  	"type": "Edm.Self.Plc",
							  	"multiplicity": "0..1"
							  },
							  {
							  	"role": "Plc_Nodes_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "*"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Plc_Nodes_Source",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Plc_Nodes_Target",
									"propertyRef": {
										"name": "PlcId"
									}
								}
							}
						},
						{
							"name": "Plc_Site",
							"end": [
							  {
							  	"role": "Plc_Site_Source",
							  	"type": "Edm.Self.Plc",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Plc_Site_Target",
							  	"type": "Edm.Self.Site",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Plc_Site_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Plc_Site_Source",
									"propertyRef": {
										"name": "SiteId"
									}
								}
							}
						},
						{
							"name": "Site_Zones",
							"end": [
							  {
							  	"role": "Site_Zones_Source",
							  	"type": "Edm.Self.Site",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "Site_Zones_Target",
							  	"type": "Edm.Self.Zone",
							  	"multiplicity": "*"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Site_Zones_Source",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Site_Zones_Target",
									"propertyRef": {
										"name": "SiteId"
									}
								}
							}
						},
						{
							"name": "Device_Site",
							"end": [
							  {
							  	"role": "Device_Site_Source",
							  	"type": "Edm.Self.Device",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Device_Site_Target",
							  	"type": "Edm.Self.Site",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Device_Site_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Device_Site_Source",
									"propertyRef": {
										"name": "SiteId"
									}
								}
							}
						},
						{
							"name": "DeviceInstance_Unit",
							"end": [
							  {
							  	"role": "DeviceInstance_Unit_Source",
							  	"type": "Edm.Self.DeviceInstance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DeviceInstance_Unit_Target",
							  	"type": "Edm.Self.Unit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "DeviceInstance_Unit_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "DeviceInstance_Unit_Source",
									"propertyRef": {
										"name": "UnitId"
									}
								}
							}
						},
						{
							"name": "DoubleParameterNode_Node",
							"end": [
							  {
							  	"role": "DoubleParameterNode_Node_Source",
							  	"type": "Edm.Self.DoubleParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DoubleParameterNode_Node_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "DoubleParameterNode_Node_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "DoubleParameterNode_Node_Source",
									"propertyRef": {
										"name": "NodeId"
									}
								}
							}
						},
						{
							"name": "DoubleParameterNode_Unit",
							"end": [
							  {
							  	"role": "DoubleParameterNode_Unit_Source",
							  	"type": "Edm.Self.DoubleParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DoubleParameterNode_Unit_Target",
							  	"type": "Edm.Self.Unit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "DoubleParameterNode_Unit_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "DoubleParameterNode_Unit_Source",
									"propertyRef": {
										"name": "UnitId"
									}
								}
							}
						},
						{
							"name": "Unit_FaultNode",
							"end": [
							  {
							  	"role": "Unit_FaultNode_Source",
							  	"type": "Edm.Self.Unit",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Unit_FaultNode_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "0..1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Unit_FaultNode_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Unit_FaultNode_Source",
									"propertyRef": {
										"name": "FaultNodeId"
									}
								}
							}
						},
						{
							"name": "Unit_IdNode",
							"end": [
							  {
							  	"role": "Unit_IdNode_Source",
							  	"type": "Edm.Self.Unit",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Unit_IdNode_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Unit_IdNode_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Unit_IdNode_Source",
									"propertyRef": {
										"name": "IdNodeId"
									}
								}
							}
						},
						{
							"name": "IntegerParameterNode_Node",
							"end": [
							  {
							  	"role": "IntegerParameterNode_Node_Source",
							  	"type": "Edm.Self.IntegerParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "IntegerParameterNode_Node_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "IntegerParameterNode_Node_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "IntegerParameterNode_Node_Source",
									"propertyRef": {
										"name": "NodeId"
									}
								}
							}
						},
						{
							"name": "IntegerParameterNode_Unit",
							"end": [
							  {
							  	"role": "IntegerParameterNode_Unit_Source",
							  	"type": "Edm.Self.IntegerParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "IntegerParameterNode_Unit_Target",
							  	"type": "Edm.Self.Unit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "IntegerParameterNode_Unit_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "IntegerParameterNode_Unit_Source",
									"propertyRef": {
										"name": "UnitId"
									}
								}
							}
						},
						{
							"name": "NodePageItem_Node",
							"end": [
							  {
							  	"role": "NodePageItem_Node_Source",
							  	"type": "Edm.Self.NodePageItem",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "NodePageItem_Node_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "NodePageItem_Node_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "NodePageItem_Node_Source",
									"propertyRef": {
										"name": "NodeId"
									}
								}
							}
						},
						{
							"name": "NodePageItem_NodePage",
							"end": [
							  {
							  	"role": "NodePageItem_NodePage_Source",
							  	"type": "Edm.Self.NodePageItem",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "NodePageItem_NodePage_Target",
							  	"type": "Edm.Self.NodePage",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "NodePageItem_NodePage_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "NodePageItem_NodePage_Source",
									"propertyRef": {
										"name": "NodePageId"
									}
								}
							}
						},
						{
							"name": "NodePage_Unit",
							"end": [
							  {
							  	"role": "NodePage_Unit_Source",
							  	"type": "Edm.Self.NodePage",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "NodePage_Unit_Target",
							  	"type": "Edm.Self.Unit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "NodePage_Unit_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "NodePage_Unit_Source",
									"propertyRef": {
										"name": "UnitId"
									}
								}
							}
						},
						{
							"name": "Unit_Operations",
							"end": [
							  {
							  	"role": "Unit_Operations_Source",
							  	"type": "Edm.Self.Unit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "Unit_Operations_Target",
							  	"type": "Edm.Self.Operation",
							  	"multiplicity": "*"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Unit_Operations_Source",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Unit_Operations_Target",
									"propertyRef": {
										"name": "UnitId"
									}
								}
							}
						},
						{
							"name": "ReportNode_Node",
							"end": [
							  {
							  	"role": "ReportNode_Node_Source",
							  	"type": "Edm.Self.ReportNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ReportNode_Node_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "ReportNode_Node_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "ReportNode_Node_Source",
									"propertyRef": {
										"name": "NodeId"
									}
								}
							}
						},
						{
							"name": "ReportNode_Unit",
							"end": [
							  {
							  	"role": "ReportNode_Unit_Source",
							  	"type": "Edm.Self.ReportNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ReportNode_Unit_Target",
							  	"type": "Edm.Self.Unit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "ReportNode_Unit_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "ReportNode_Unit_Source",
									"propertyRef": {
										"name": "UnitId"
									}
								}
							}
						},
						{
							"name": "StateNode_Node",
							"end": [
							  {
							  	"role": "StateNode_Node_Source",
							  	"type": "Edm.Self.StateNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StateNode_Node_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "StateNode_Node_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "StateNode_Node_Source",
									"propertyRef": {
										"name": "NodeId"
									}
								}
							}
						},
						{
							"name": "StateNode_Unit",
							"end": [
							  {
							  	"role": "StateNode_Unit_Source",
							  	"type": "Edm.Self.StateNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StateNode_Unit_Target",
							  	"type": "Edm.Self.Unit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "StateNode_Unit_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "StateNode_Unit_Source",
									"propertyRef": {
										"name": "UnitId"
									}
								}
							}
						},
						{
							"name": "StringParameterNode_Node",
							"end": [
							  {
							  	"role": "StringParameterNode_Node_Source",
							  	"type": "Edm.Self.StringParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StringParameterNode_Node_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "StringParameterNode_Node_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "StringParameterNode_Node_Source",
									"propertyRef": {
										"name": "NodeId"
									}
								}
							}
						},
						{
							"name": "StringParameterNode_Unit",
							"end": [
							  {
							  	"role": "StringParameterNode_Unit_Source",
							  	"type": "Edm.Self.StringParameterNode",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StringParameterNode_Unit_Target",
							  	"type": "Edm.Self.Unit",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "StringParameterNode_Unit_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "StringParameterNode_Unit_Source",
									"propertyRef": {
										"name": "UnitId"
									}
								}
							}
						},
						{
							"name": "Unit_Zone",
							"end": [
							  {
							  	"role": "Unit_Zone_Source",
							  	"type": "Edm.Self.Unit",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Unit_Zone_Target",
							  	"type": "Edm.Self.Zone",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Unit_Zone_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Unit_Zone_Source",
									"propertyRef": {
										"name": "ZoneId"
									}
								}
							}
						},
						{
							"name": "BoolFormula_Parameter",
							"end": [
							  {
							  	"role": "BoolFormula_Parameter_Source",
							  	"type": "Edm.Self.BoolFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "BoolFormula_Parameter_Target",
							  	"type": "Edm.Self.BoolParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "BoolFormula_Parameter_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "BoolFormula_Parameter_Source",
									"propertyRef": {
										"name": "ParameterId"
									}
								}
							}
						},
						{
							"name": "DoubleFormula_FormulaStep",
							"end": [
							  {
							  	"role": "DoubleFormula_FormulaStep_Source",
							  	"type": "Edm.Self.DoubleFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DoubleFormula_FormulaStep_Target",
							  	"type": "Edm.Self.FormulaStep",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "DoubleFormula_FormulaStep_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "DoubleFormula_FormulaStep_Source",
									"propertyRef": {
										"name": "FormulaStepId"
									}
								}
							}
						},
						{
							"name": "DoubleFormula_Parameter",
							"end": [
							  {
							  	"role": "DoubleFormula_Parameter_Source",
							  	"type": "Edm.Self.DoubleFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "DoubleFormula_Parameter_Target",
							  	"type": "Edm.Self.DoubleParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "DoubleFormula_Parameter_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "DoubleFormula_Parameter_Source",
									"propertyRef": {
										"name": "ParameterId"
									}
								}
							}
						},
						{
							"name": "FormulaStep_Formula",
							"end": [
							  {
							  	"role": "FormulaStep_Formula_Source",
							  	"type": "Edm.Self.FormulaStep",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "FormulaStep_Formula_Target",
							  	"type": "Edm.Self.Formula",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "FormulaStep_Formula_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "FormulaStep_Formula_Source",
									"propertyRef": {
										"name": "FormulaId"
									}
								}
							}
						},
						{
							"name": "IntegerFormula_FormulaStep",
							"end": [
							  {
							  	"role": "IntegerFormula_FormulaStep_Source",
							  	"type": "Edm.Self.IntegerFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "IntegerFormula_FormulaStep_Target",
							  	"type": "Edm.Self.FormulaStep",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "IntegerFormula_FormulaStep_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "IntegerFormula_FormulaStep_Source",
									"propertyRef": {
										"name": "FormulaStepId"
									}
								}
							}
						},
						{
							"name": "IntegerFormula_Parameter",
							"end": [
							  {
							  	"role": "IntegerFormula_Parameter_Source",
							  	"type": "Edm.Self.IntegerFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "IntegerFormula_Parameter_Target",
							  	"type": "Edm.Self.IntegerParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "IntegerFormula_Parameter_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "IntegerFormula_Parameter_Source",
									"propertyRef": {
										"name": "ParameterId"
									}
								}
							}
						},
						{
							"name": "ProcedureStep_FormulaSteps",
							"end": [
							  {
							  	"role": "ProcedureStep_FormulaSteps_Source",
							  	"type": "Edm.Self.ProcedureStep",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "ProcedureStep_FormulaSteps_Target",
							  	"type": "Edm.Self.FormulaStep",
							  	"multiplicity": "*"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "ProcedureStep_FormulaSteps_Source",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "ProcedureStep_FormulaSteps_Target",
									"propertyRef": {
										"name": "ProcedureStepId"
									}
								}
							}
						},
						{
							"name": "ProcedureStep_Operation",
							"end": [
							  {
							  	"role": "ProcedureStep_Operation_Source",
							  	"type": "Edm.Self.ProcedureStep",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ProcedureStep_Operation_Target",
							  	"type": "Edm.Self.Operation",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "ProcedureStep_Operation_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "ProcedureStep_Operation_Source",
									"propertyRef": {
										"name": "OperationId"
									}
								}
							}
						},
						{
							"name": "UnitProcedure_Procedure",
							"end": [
							  {
							  	"role": "UnitProcedure_Procedure_Source",
							  	"type": "Edm.Self.UnitProcedure",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "UnitProcedure_Procedure_Target",
							  	"type": "Edm.Self.Procedure",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "UnitProcedure_Procedure_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "UnitProcedure_Procedure_Source",
									"propertyRef": {
										"name": "ProcedureId"
									}
								}
							}
						},
						{
							"name": "UnitProcedure_ProcedureSteps",
							"end": [
							  {
							  	"role": "UnitProcedure_ProcedureSteps_Source",
							  	"type": "Edm.Self.UnitProcedure",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  },
							  {
							  	"role": "UnitProcedure_ProcedureSteps_Target",
							  	"type": "Edm.Self.ProcedureStep",
							  	"multiplicity": "*"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "UnitProcedure_ProcedureSteps_Source",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "UnitProcedure_ProcedureSteps_Target",
									"propertyRef": {
										"name": "UnitProcedureId"
									}
								}
							}
						},
						{
							"name": "UnitProcedure_Unit",
							"end": [
							  {
							  	"role": "UnitProcedure_Unit_Source",
							  	"type": "Edm.Self.UnitProcedure",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "UnitProcedure_Unit_Target",
							  	"type": "Edm.Self.Unit",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "UnitProcedure_Unit_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "UnitProcedure_Unit_Source",
									"propertyRef": {
										"name": "UnitId"
									}
								}
							}
						},
						{
							"name": "StringFormula_FormulaStep",
							"end": [
							  {
							  	"role": "StringFormula_FormulaStep_Source",
							  	"type": "Edm.Self.StringFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StringFormula_FormulaStep_Target",
							  	"type": "Edm.Self.FormulaStep",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "StringFormula_FormulaStep_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "StringFormula_FormulaStep_Source",
									"propertyRef": {
										"name": "FormulaStepId"
									}
								}
							}
						},
						{
							"name": "StringFormula_Parameter",
							"end": [
							  {
							  	"role": "StringFormula_Parameter_Source",
							  	"type": "Edm.Self.StringFormula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "StringFormula_Parameter_Target",
							  	"type": "Edm.Self.StringParameter",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "StringFormula_Parameter_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "StringFormula_Parameter_Source",
									"propertyRef": {
										"name": "ParameterId"
									}
								}
							}
						},
						{
							"name": "Formula_Procedure",
							"end": [
							  {
							  	"role": "Formula_Procedure_Source",
							  	"type": "Edm.Self.Formula",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Formula_Procedure_Target",
							  	"type": "Edm.Self.Procedure",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Formula_Procedure_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Formula_Procedure_Source",
									"propertyRef": {
										"name": "ProcedureId"
									}
								}
							}
						},
						{
							"name": "Procedure_Zone",
							"end": [
							  {
							  	"role": "Procedure_Zone_Source",
							  	"type": "Edm.Self.Procedure",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Procedure_Zone_Target",
							  	"type": "Edm.Self.Zone",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Procedure_Zone_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Procedure_Zone_Source",
									"propertyRef": {
										"name": "ZoneId"
									}
								}
							}
						},
						{
							"name": "Zone_RootFolders",
							"end": [
							  {
							  	"role": "Zone_RootFolders_Source",
							  	"type": "Edm.Self.Zone",
							  	"multiplicity": "0..1"
							  },
							  {
							  	"role": "Zone_RootFolders_Target",
							  	"type": "Edm.Self.Folder",
							  	"multiplicity": "*"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Zone_RootFolders_Source",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Zone_RootFolders_Target",
									"propertyRef": {
										"name": "RootZoneId"
									}
								}
							}
						},
						{
							"name": "ScanClass_Nodes",
							"end": [
							  {
							  	"role": "ScanClass_Nodes_Source",
							  	"type": "Edm.Self.ScanClass",
							  	"multiplicity": "0..1"
							  },
							  {
							  	"role": "ScanClass_Nodes_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "*"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "ScanClass_Nodes_Source",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "ScanClass_Nodes_Target",
									"propertyRef": {
										"name": "ScanClassId"
									}
								}
							}
						},
						{
							"name": "ScanClass_Zone",
							"end": [
							  {
							  	"role": "ScanClass_Zone_Source",
							  	"type": "Edm.Self.ScanClass",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ScanClass_Zone_Target",
							  	"type": "Edm.Self.Zone",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "ScanClass_Zone_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "ScanClass_Zone_Source",
									"propertyRef": {
										"name": "ZoneId"
									}
								}
							}
						},
						{
							"name": "ZoneClearance_Clearance",
							"end": [
							  {
							  	"role": "ZoneClearance_Clearance_Source",
							  	"type": "Edm.Self.ZoneClearance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ZoneClearance_Clearance_Target",
							  	"type": "Edm.Self.Clearance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "ZoneClearance_Clearance_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "ZoneClearance_Clearance_Source",
									"propertyRef": {
										"name": "ClearanceId"
									}
								}
							}
						},
						{
							"name": "ZoneClearance_Nodes",
							"end": [
							  {
							  	"role": "ZoneClearance_Nodes_Source",
							  	"type": "Edm.Self.ZoneClearance",
							  	"multiplicity": "0..1"
							  },
							  {
							  	"role": "ZoneClearance_Nodes_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "*"
							  }
							]
						},
						{
							"name": "Signature_Group",
							"end": [
							  {
							  	"role": "Signature_Group_Source",
							  	"type": "Edm.Self.Signature",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Signature_Group_Target",
							  	"type": "Edm.Self.Group",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Signature_Group_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Signature_Group_Source",
									"propertyRef": {
										"name": "GroupId"
									}
								}
							}
						},
						{
							"name": "Signature_ZoneClearance",
							"end": [
							  {
							  	"role": "Signature_ZoneClearance_Source",
							  	"type": "Edm.Self.Signature",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Signature_ZoneClearance_Target",
							  	"type": "Edm.Self.ZoneClearance",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Signature_ZoneClearance_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Signature_ZoneClearance_Source",
									"propertyRef": {
										"name": "ZoneClearanceId"
									}
								}
							}
						},
						{
							"name": "ZoneClearance_Zone",
							"end": [
							  {
							  	"role": "ZoneClearance_Zone_Source",
							  	"type": "Edm.Self.ZoneClearance",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "ZoneClearance_Zone_Target",
							  	"type": "Edm.Self.Zone",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "ZoneClearance_Zone_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "ZoneClearance_Zone_Source",
									"propertyRef": {
										"name": "ZoneId"
									}
								}
							}
						},
						{
							"name": "Node_Clearance",
							"end": [
							  {
							  	"role": "Node_Clearance_Source",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Node_Clearance_Target",
							  	"type": "Edm.Self.Clearance",
							  	"multiplicity": "0..1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Node_Clearance_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Node_Clearance_Source",
									"propertyRef": {
										"name": "ClearanceId"
									}
								}
							}
						},
						{
							"name": "Alarm_Acknowledge",
							"end": [
							  {
							  	"role": "Alarm_Acknowledge_Source",
							  	"type": "Edm.Self.Alarm",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Alarm_Acknowledge_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "0..1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Alarm_Acknowledge_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Alarm_Acknowledge_Source",
									"propertyRef": {
										"name": "AcknowledgeId"
									}
								}
							}
						},
						{
							"name": "Alarm_AlarmSeverity",
							"end": [
							  {
							  	"role": "Alarm_AlarmSeverity_Source",
							  	"type": "Edm.Self.Alarm",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Alarm_AlarmSeverity_Target",
							  	"type": "Edm.Self.AlarmSeverity",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Alarm_AlarmSeverity_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Alarm_AlarmSeverity_Source",
									"propertyRef": {
										"name": "AlarmSeverityId"
									}
								}
							}
						},
						{
							"name": "Alarm_Handshake",
							"end": [
							  {
							  	"role": "Alarm_Handshake_Source",
							  	"type": "Edm.Self.Alarm",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Alarm_Handshake_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "0..1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Alarm_Handshake_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Alarm_Handshake_Source",
									"propertyRef": {
										"name": "HandshakeId"
									}
								}
							}
						},
						{
							"name": "Alarm_Node",
							"end": [
							  {
							  	"role": "Alarm_Node_Source",
							  	"type": "Edm.Self.Alarm",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Alarm_Node_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Alarm_Node_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Alarm_Node_Source",
									"propertyRef": {
										"name": "NodeId"
									}
								}
							}
						},
						{
							"name": "Alarm_Unit",
							"end": [
							  {
							  	"role": "Alarm_Unit_Source",
							  	"type": "Edm.Self.Alarm",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "Alarm_Unit_Target",
							  	"type": "Edm.Self.Unit",
							  	"multiplicity": "0..1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "Alarm_Unit_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "Alarm_Unit_Source",
									"propertyRef": {
										"name": "UnitId"
									}
								}
							}
						},
						{
							"name": "AlarmValue_Alarm",
							"end": [
							  {
							  	"role": "AlarmValue_Alarm_Source",
							  	"type": "Edm.Self.AlarmValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "AlarmValue_Alarm_Target",
							  	"type": "Edm.Self.Alarm",
							  	"multiplicity": "1",
							  	"onDelete": {
							  		"action": "Cascade"
							  	}
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "AlarmValue_Alarm_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "AlarmValue_Alarm_Source",
									"propertyRef": {
										"name": "AlarmId"
									}
								}
							}
						},
						{
							"name": "AlarmValue_Node",
							"end": [
							  {
							  	"role": "AlarmValue_Node_Source",
							  	"type": "Edm.Self.AlarmValue",
							  	"multiplicity": "*"
							  },
							  {
							  	"role": "AlarmValue_Node_Target",
							  	"type": "Edm.Self.Node",
							  	"multiplicity": "1"
							  }
							],
							"referentialConstraint": {
								"principal": {
									"role": "AlarmValue_Node_Target",
									"propertyRef": {
										"name": "Id"
									}
								},
								"dependent": {
									"role": "AlarmValue_Node_Source",
									"propertyRef": {
										"name": "NodeId"
									}
								}
							}
						}
					  ],
					  "entityContainer": {
					  	"name": "ConfigurationContext",
						"customannotation:UseClrTypes": "true",
						"entitySet": [
						  {
						  	"name": "Accounts",
						  	"entityType": "Self.Account"
						  },
						  {
						  	"name": "Alarms",
						  	"entityType": "Self.Alarm"
						  },
						  {
						  	"name": "Nodes",
						  	"entityType": "Self.Node"
						  },
						  {
						  	"name": "Clearances",
						  	"entityType": "Self.Clearance"
						  },
						  {
						  	"name": "CommandClearances",
						  	"entityType": "Self.CommandClearance"
						  },
						  {
						  	"name": "Commands",
						  	"entityType": "Self.Command"
						  },
						  {
						  	"name": "Zones",
						  	"entityType": "Self.Zone"
						  },
						  {
						  	"name": "Folders",
						  	"entityType": "Self.Folder"
						  },
						  {
						  	"name": "Groups",
						  	"entityType": "Self.Group"
						  },
						  {
						  	"name": "Procedures",
						  	"entityType": "Self.Procedure"
						  },
						  {
						  	"name": "Formulae",
						  	"entityType": "Self.Formula"
						  },
						  {
						  	"name": "FormulaSteps",
						  	"entityType": "Self.FormulaStep"
						  },
						  {
						  	"name": "BoolFormulae",
						  	"entityType": "Self.BoolFormula"
						  },
						  {
						  	"name": "BoolParameters",
						  	"entityType": "Self.BoolParameter"
						  },
						  {
						  	"name": "BoolEnumerations",
						  	"entityType": "Self.BoolEnumeration"
						  },
						  {
						  	"name": "Operations",
						  	"entityType": "Self.Operation"
						  },
						  {
						  	"name": "DoubleParameters",
						  	"entityType": "Self.DoubleParameter"
						  },
						  {
						  	"name": "IntegerParameters",
						  	"entityType": "Self.IntegerParameter"
						  },
						  {
						  	"name": "IntegerEnumerations",
						  	"entityType": "Self.IntegerEnumeration"
						  },
						  {
						  	"name": "Reports",
						  	"entityType": "Self.Report"
						  },
						  {
						  	"name": "StringParameters",
						  	"entityType": "Self.StringParameter"
						  },
						  {
						  	"name": "Units",
						  	"entityType": "Self.Unit"
						  },
						  {
						  	"name": "BoolParameterNodes",
						  	"entityType": "Self.BoolParameterNode"
						  },
						  {
						  	"name": "CommandNodes",
						  	"entityType": "Self.CommandNode"
						  },
						  {
						  	"name": "DataLogNodes",
						  	"entityType": "Self.DataLogNode"
						  },
						  {
						  	"name": "DeviceInstances",
						  	"entityType": "Self.DeviceInstance"
						  },
						  {
						  	"name": "Devices",
						  	"entityType": "Self.Device"
						  },
						  {
						  	"name": "DeviceDisplays",
						  	"entityType": "Self.DeviceDisplay"
						  },
						  {
						  	"name": "DeviceInstanceDisplays",
						  	"entityType": "Self.DeviceInstanceDisplay"
						  },
						  {
						  	"name": "DeviceTags",
						  	"entityType": "Self.DeviceTag"
						  },
						  {
						  	"name": "DeviceInstanceTags",
						  	"entityType": "Self.DeviceInstanceTag"
						  },
						  {
						  	"name": "Sites",
						  	"entityType": "Self.Site"
						  },
						  {
						  	"name": "AlarmSeverities",
						  	"entityType": "Self.AlarmSeverity"
						  },
						  {
						  	"name": "Enterprises",
						  	"entityType": "Self.Enterprise"
						  },
						  {
						  	"name": "Applications",
						  	"entityType": "Self.Application"
						  },
						  {
						  	"name": "Products",
						  	"entityType": "Self.Product"
						  },
						  {
						  	"name": "Plcs",
						  	"entityType": "Self.Plc"
						  },
						  {
						  	"name": "DoubleParameterNodes",
						  	"entityType": "Self.DoubleParameterNode"
						  },
						  {
						  	"name": "IntegerParameterNodes",
						  	"entityType": "Self.IntegerParameterNode"
						  },
						  {
						  	"name": "NodePages",
						  	"entityType": "Self.NodePage"
						  },
						  {
						  	"name": "NodePageItems",
						  	"entityType": "Self.NodePageItem"
						  },
						  {
						  	"name": "ReportNodes",
						  	"entityType": "Self.ReportNode"
						  },
						  {
						  	"name": "StateNodes",
						  	"entityType": "Self.StateNode"
						  },
						  {
						  	"name": "StringParameterNodes",
						  	"entityType": "Self.StringParameterNode"
						  },
						  {
						  	"name": "DoubleFormulae",
						  	"entityType": "Self.DoubleFormula"
						  },
						  {
						  	"name": "IntegerFormulae",
						  	"entityType": "Self.IntegerFormula"
						  },
						  {
						  	"name": "ProcedureSteps",
						  	"entityType": "Self.ProcedureStep"
						  },
						  {
						  	"name": "UnitProcedures",
						  	"entityType": "Self.UnitProcedure"
						  },
						  {
						  	"name": "StringFormulae",
						  	"entityType": "Self.StringFormula"
						  },
						  {
						  	"name": "ScanClasses",
						  	"entityType": "Self.ScanClass"
						  },
						  {
						  	"name": "ZoneClearances",
						  	"entityType": "Self.ZoneClearance"
						  },
						  {
						  	"name": "Signatures",
						  	"entityType": "Self.Signature"
						  },
						  {
						  	"name": "AlarmValues",
						  	"entityType": "Self.AlarmValue"
						  }
						],
						"associationSet": [
						  {
						  	"name": "CommandClearance_Clearance",
						  	"association": "Self.CommandClearance_Clearance",
						  	"end": [
							  {
							  	"role": "CommandClearance_Clearance_Source",
							  	"entitySet": "CommandClearances"
							  },
							  {
							  	"role": "CommandClearance_Clearance_Target",
							  	"entitySet": "Clearances"
							  }
						  	]
						  },
						  {
						  	"name": "Command_CommandClearances",
						  	"association": "Self.Command_CommandClearances",
						  	"end": [
							  {
							  	"role": "Command_CommandClearances_Source",
							  	"entitySet": "Commands"
							  },
							  {
							  	"role": "Command_CommandClearances_Target",
							  	"entitySet": "CommandClearances"
							  }
						  	]
						  },
						  {
						  	"name": "Zone_CommandClearances",
						  	"association": "Self.Zone_CommandClearances",
						  	"end": [
							  {
							  	"role": "Zone_CommandClearances_Source",
							  	"entitySet": "Zones"
							  },
							  {
							  	"role": "Zone_CommandClearances_Target",
							  	"entitySet": "CommandClearances"
							  }
						  	]
						  },
						  {
						  	"name": "Folder_Nodes",
						  	"association": "Self.Folder_Nodes",
						  	"end": [
							  {
							  	"role": "Folder_Nodes_Source",
							  	"entitySet": "Folders"
							  },
							  {
							  	"role": "Folder_Nodes_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "Folder_Parent",
						  	"association": "Self.Folder_Parent",
						  	"end": [
							  {
							  	"role": "Folder_Parent_Source",
							  	"entitySet": "Folders"
							  },
							  {
							  	"role": "Folder_Parent_Target",
							  	"entitySet": "Folders"
							  }
						  	]
						  },
						  {
						  	"name": "Folder_Zone",
						  	"association": "Self.Folder_Zone",
						  	"end": [
							  {
							  	"role": "Folder_Zone_Source",
							  	"entitySet": "Folders"
							  },
							  {
							  	"role": "Folder_Zone_Target",
							  	"entitySet": "Zones"
							  }
						  	]
						  },
						  {
						  	"name": "Group_Zone",
						  	"association": "Self.Group_Zone",
						  	"end": [
							  {
							  	"role": "Group_Zone_Source",
							  	"entitySet": "Groups"
							  },
							  {
							  	"role": "Group_Zone_Target",
							  	"entitySet": "Zones"
							  }
						  	]
						  },
						  {
						  	"name": "BoolFormula_FormulaStep",
						  	"association": "Self.BoolFormula_FormulaStep",
						  	"end": [
							  {
							  	"role": "BoolFormula_FormulaStep_Source",
							  	"entitySet": "BoolFormulae"
							  },
							  {
							  	"role": "BoolFormula_FormulaStep_Target",
							  	"entitySet": "FormulaSteps"
							  }
						  	]
						  },
						  {
						  	"name": "BoolEnumeration_Parameter",
						  	"association": "Self.BoolEnumeration_Parameter",
						  	"end": [
							  {
							  	"role": "BoolEnumeration_Parameter_Source",
							  	"entitySet": "BoolEnumerations"
							  },
							  {
							  	"role": "BoolEnumeration_Parameter_Target",
							  	"entitySet": "BoolParameters"
							  }
						  	]
						  },
						  {
						  	"name": "BoolParameter_Node",
						  	"association": "Self.BoolParameter_Node",
						  	"end": [
							  {
							  	"role": "BoolParameter_Node_Source",
							  	"entitySet": "BoolParameters"
							  },
							  {
							  	"role": "BoolParameter_Node_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "Operation_BoolParameters",
						  	"association": "Self.Operation_BoolParameters",
						  	"end": [
							  {
							  	"role": "Operation_BoolParameters_Source",
							  	"entitySet": "Operations"
							  },
							  {
							  	"role": "Operation_BoolParameters_Target",
							  	"entitySet": "BoolParameters"
							  }
						  	]
						  },
						  {
						  	"name": "DoubleParameter_Node",
						  	"association": "Self.DoubleParameter_Node",
						  	"end": [
							  {
							  	"role": "DoubleParameter_Node_Source",
							  	"entitySet": "DoubleParameters"
							  },
							  {
							  	"role": "DoubleParameter_Node_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "DoubleParameter_Operation",
						  	"association": "Self.DoubleParameter_Operation",
						  	"end": [
							  {
							  	"role": "DoubleParameter_Operation_Source",
							  	"entitySet": "DoubleParameters"
							  },
							  {
							  	"role": "DoubleParameter_Operation_Target",
							  	"entitySet": "Operations"
							  }
						  	]
						  },
						  {
						  	"name": "IntegerEnumeration_Parameter",
						  	"association": "Self.IntegerEnumeration_Parameter",
						  	"end": [
							  {
							  	"role": "IntegerEnumeration_Parameter_Source",
							  	"entitySet": "IntegerEnumerations"
							  },
							  {
							  	"role": "IntegerEnumeration_Parameter_Target",
							  	"entitySet": "IntegerParameters"
							  }
						  	]
						  },
						  {
						  	"name": "IntegerParameter_Node",
						  	"association": "Self.IntegerParameter_Node",
						  	"end": [
							  {
							  	"role": "IntegerParameter_Node_Source",
							  	"entitySet": "IntegerParameters"
							  },
							  {
							  	"role": "IntegerParameter_Node_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "IntegerParameter_Operation",
						  	"association": "Self.IntegerParameter_Operation",
						  	"end": [
							  {
							  	"role": "IntegerParameter_Operation_Source",
							  	"entitySet": "IntegerParameters"
							  },
							  {
							  	"role": "IntegerParameter_Operation_Target",
							  	"entitySet": "Operations"
							  }
						  	]
						  },
						  {
						  	"name": "Report_Node",
						  	"association": "Self.Report_Node",
						  	"end": [
							  {
							  	"role": "Report_Node_Source",
							  	"entitySet": "Reports"
							  },
							  {
							  	"role": "Report_Node_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "Report_Operation",
						  	"association": "Self.Report_Operation",
						  	"end": [
							  {
							  	"role": "Report_Operation_Source",
							  	"entitySet": "Reports"
							  },
							  {
							  	"role": "Report_Operation_Target",
							  	"entitySet": "Operations"
							  }
						  	]
						  },
						  {
						  	"name": "StringParameter_Node",
						  	"association": "Self.StringParameter_Node",
						  	"end": [
							  {
							  	"role": "StringParameter_Node_Source",
							  	"entitySet": "StringParameters"
							  },
							  {
							  	"role": "StringParameter_Node_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "StringParameter_Operation",
						  	"association": "Self.StringParameter_Operation",
						  	"end": [
							  {
							  	"role": "StringParameter_Operation_Source",
							  	"entitySet": "StringParameters"
							  },
							  {
							  	"role": "StringParameter_Operation_Target",
							  	"entitySet": "Operations"
							  }
						  	]
						  },
						  {
						  	"name": "BoolParameterNode_Node",
						  	"association": "Self.BoolParameterNode_Node",
						  	"end": [
							  {
							  	"role": "BoolParameterNode_Node_Source",
							  	"entitySet": "BoolParameterNodes"
							  },
							  {
							  	"role": "BoolParameterNode_Node_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "BoolParameterNode_Unit",
						  	"association": "Self.BoolParameterNode_Unit",
						  	"end": [
							  {
							  	"role": "BoolParameterNode_Unit_Source",
							  	"entitySet": "BoolParameterNodes"
							  },
							  {
							  	"role": "BoolParameterNode_Unit_Target",
							  	"entitySet": "Units"
							  }
						  	]
						  },
						  {
						  	"name": "CommandNode_Node",
						  	"association": "Self.CommandNode_Node",
						  	"end": [
							  {
							  	"role": "CommandNode_Node_Source",
							  	"entitySet": "CommandNodes"
							  },
							  {
							  	"role": "CommandNode_Node_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "CommandNode_PermissionNode",
						  	"association": "Self.CommandNode_PermissionNode",
						  	"end": [
							  {
							  	"role": "CommandNode_PermissionNode_Source",
							  	"entitySet": "CommandNodes"
							  },
							  {
							  	"role": "CommandNode_PermissionNode_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "CommandNode_Unit",
						  	"association": "Self.CommandNode_Unit",
						  	"end": [
							  {
							  	"role": "CommandNode_Unit_Source",
							  	"entitySet": "CommandNodes"
							  },
							  {
							  	"role": "CommandNode_Unit_Target",
							  	"entitySet": "Units"
							  }
						  	]
						  },
						  {
						  	"name": "DataLogNode_Node",
						  	"association": "Self.DataLogNode_Node",
						  	"end": [
							  {
							  	"role": "DataLogNode_Node_Source",
							  	"entitySet": "DataLogNodes"
							  },
							  {
							  	"role": "DataLogNode_Node_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "DataLogNode_Unit",
						  	"association": "Self.DataLogNode_Unit",
						  	"end": [
							  {
							  	"role": "DataLogNode_Unit_Source",
							  	"entitySet": "DataLogNodes"
							  },
							  {
							  	"role": "DataLogNode_Unit_Target",
							  	"entitySet": "Units"
							  }
						  	]
						  },
						  {
						  	"name": "DeviceDisplay_Device",
						  	"association": "Self.DeviceDisplay_Device",
						  	"end": [
							  {
							  	"role": "DeviceDisplay_Device_Source",
							  	"entitySet": "DeviceDisplays"
							  },
							  {
							  	"role": "DeviceDisplay_Device_Target",
							  	"entitySet": "Devices"
							  }
						  	]
						  },
						  {
						  	"name": "DeviceInstanceDisplay_DeviceDisplay",
						  	"association": "Self.DeviceInstanceDisplay_DeviceDisplay",
						  	"end": [
							  {
							  	"role": "DeviceInstanceDisplay_DeviceDisplay_Source",
							  	"entitySet": "DeviceInstanceDisplays"
							  },
							  {
							  	"role": "DeviceInstanceDisplay_DeviceDisplay_Target",
							  	"entitySet": "DeviceDisplays"
							  }
						  	]
						  },
						  {
						  	"name": "DeviceInstanceDisplay_DeviceInstance",
						  	"association": "Self.DeviceInstanceDisplay_DeviceInstance",
						  	"end": [
							  {
							  	"role": "DeviceInstanceDisplay_DeviceInstance_Source",
							  	"entitySet": "DeviceInstanceDisplays"
							  },
							  {
							  	"role": "DeviceInstanceDisplay_DeviceInstance_Target",
							  	"entitySet": "DeviceInstances"
							  }
						  	]
						  },
						  {
						  	"name": "Device_DeviceInstances",
						  	"association": "Self.Device_DeviceInstances",
						  	"end": [
							  {
							  	"role": "Device_DeviceInstances_Source",
							  	"entitySet": "Devices"
							  },
							  {
							  	"role": "Device_DeviceInstances_Target",
							  	"entitySet": "DeviceInstances"
							  }
						  	]
						  },
						  {
						  	"name": "DeviceTag_Device",
						  	"association": "Self.DeviceTag_Device",
						  	"end": [
							  {
							  	"role": "DeviceTag_Device_Source",
							  	"entitySet": "DeviceTags"
							  },
							  {
							  	"role": "DeviceTag_Device_Target",
							  	"entitySet": "Devices"
							  }
						  	]
						  },
						  {
						  	"name": "DeviceInstanceTag_DeviceInstance",
						  	"association": "Self.DeviceInstanceTag_DeviceInstance",
						  	"end": [
							  {
							  	"role": "DeviceInstanceTag_DeviceInstance_Source",
							  	"entitySet": "DeviceInstanceTags"
							  },
							  {
							  	"role": "DeviceInstanceTag_DeviceInstance_Target",
							  	"entitySet": "DeviceInstances"
							  }
						  	]
						  },
						  {
						  	"name": "DeviceInstanceTag_DeviceTag",
						  	"association": "Self.DeviceInstanceTag_DeviceTag",
						  	"end": [
							  {
							  	"role": "DeviceInstanceTag_DeviceTag_Source",
							  	"entitySet": "DeviceInstanceTags"
							  },
							  {
							  	"role": "DeviceInstanceTag_DeviceTag_Target",
							  	"entitySet": "DeviceTags"
							  }
						  	]
						  },
						  {
						  	"name": "DeviceInstanceTag_Node",
						  	"association": "Self.DeviceInstanceTag_Node",
						  	"end": [
							  {
							  	"role": "DeviceInstanceTag_Node_Source",
							  	"entitySet": "DeviceInstanceTags"
							  },
							  {
							  	"role": "DeviceInstanceTag_Node_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "AlarmSeverity_Site",
						  	"association": "Self.AlarmSeverity_Site",
						  	"end": [
							  {
							  	"role": "AlarmSeverity_Site_Source",
							  	"entitySet": "AlarmSeverities"
							  },
							  {
							  	"role": "AlarmSeverity_Site_Target",
							  	"entitySet": "Sites"
							  }
						  	]
						  },
						  {
						  	"name": "Site_Clearances",
						  	"association": "Self.Site_Clearances",
						  	"end": [
							  {
							  	"role": "Site_Clearances_Source",
							  	"entitySet": "Sites"
							  },
							  {
							  	"role": "Site_Clearances_Target",
							  	"entitySet": "Clearances"
							  }
						  	]
						  },
						  {
						  	"name": "Application_Enterprises",
						  	"association": "Self.Application_Enterprises",
						  	"end": [
							  {
							  	"role": "Application_Enterprises_Source",
							  	"entitySet": "Applications"
							  },
							  {
							  	"role": "Application_Enterprises_Target",
							  	"entitySet": "Enterprises"
							  }
						  	]
						  },
						  {
						  	"name": "Product_Enterprise",
						  	"association": "Self.Product_Enterprise",
						  	"end": [
							  {
							  	"role": "Product_Enterprise_Source",
							  	"entitySet": "Products"
							  },
							  {
							  	"role": "Product_Enterprise_Target",
							  	"entitySet": "Enterprises"
							  }
						  	]
						  },
						  {
						  	"name": "Product_Formulae",
						  	"association": "Self.Product_Formulae",
						  	"end": [
							  {
							  	"role": "Product_Formulae_Source",
							  	"entitySet": "Products"
							  },
							  {
							  	"role": "Product_Formulae_Target",
							  	"entitySet": "Formulae"
							  }
						  	]
						  },
						  {
						  	"name": "Enterprise_Sites",
						  	"association": "Self.Enterprise_Sites",
						  	"end": [
							  {
							  	"role": "Enterprise_Sites_Source",
							  	"entitySet": "Enterprises"
							  },
							  {
							  	"role": "Enterprise_Sites_Target",
							  	"entitySet": "Sites"
							  }
						  	]
						  },
						  {
						  	"name": "Plc_Nodes",
						  	"association": "Self.Plc_Nodes",
						  	"end": [
							  {
							  	"role": "Plc_Nodes_Source",
							  	"entitySet": "Plcs"
							  },
							  {
							  	"role": "Plc_Nodes_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "Plc_Site",
						  	"association": "Self.Plc_Site",
						  	"end": [
							  {
							  	"role": "Plc_Site_Source",
							  	"entitySet": "Plcs"
							  },
							  {
							  	"role": "Plc_Site_Target",
							  	"entitySet": "Sites"
							  }
						  	]
						  },
						  {
						  	"name": "Site_Zones",
						  	"association": "Self.Site_Zones",
						  	"end": [
							  {
							  	"role": "Site_Zones_Source",
							  	"entitySet": "Sites"
							  },
							  {
							  	"role": "Site_Zones_Target",
							  	"entitySet": "Zones"
							  }
						  	]
						  },
						  {
						  	"name": "Device_Site",
						  	"association": "Self.Device_Site",
						  	"end": [
							  {
							  	"role": "Device_Site_Source",
							  	"entitySet": "Devices"
							  },
							  {
							  	"role": "Device_Site_Target",
							  	"entitySet": "Sites"
							  }
						  	]
						  },
						  {
						  	"name": "DeviceInstance_Unit",
						  	"association": "Self.DeviceInstance_Unit",
						  	"end": [
							  {
							  	"role": "DeviceInstance_Unit_Source",
							  	"entitySet": "DeviceInstances"
							  },
							  {
							  	"role": "DeviceInstance_Unit_Target",
							  	"entitySet": "Units"
							  }
						  	]
						  },
						  {
						  	"name": "DoubleParameterNode_Node",
						  	"association": "Self.DoubleParameterNode_Node",
						  	"end": [
							  {
							  	"role": "DoubleParameterNode_Node_Source",
							  	"entitySet": "DoubleParameterNodes"
							  },
							  {
							  	"role": "DoubleParameterNode_Node_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "DoubleParameterNode_Unit",
						  	"association": "Self.DoubleParameterNode_Unit",
						  	"end": [
							  {
							  	"role": "DoubleParameterNode_Unit_Source",
							  	"entitySet": "DoubleParameterNodes"
							  },
							  {
							  	"role": "DoubleParameterNode_Unit_Target",
							  	"entitySet": "Units"
							  }
						  	]
						  },
						  {
						  	"name": "Unit_FaultNode",
						  	"association": "Self.Unit_FaultNode",
						  	"end": [
							  {
							  	"role": "Unit_FaultNode_Source",
							  	"entitySet": "Units"
							  },
							  {
							  	"role": "Unit_FaultNode_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "Unit_IdNode",
						  	"association": "Self.Unit_IdNode",
						  	"end": [
							  {
							  	"role": "Unit_IdNode_Source",
							  	"entitySet": "Units"
							  },
							  {
							  	"role": "Unit_IdNode_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "IntegerParameterNode_Node",
						  	"association": "Self.IntegerParameterNode_Node",
						  	"end": [
							  {
							  	"role": "IntegerParameterNode_Node_Source",
							  	"entitySet": "IntegerParameterNodes"
							  },
							  {
							  	"role": "IntegerParameterNode_Node_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "IntegerParameterNode_Unit",
						  	"association": "Self.IntegerParameterNode_Unit",
						  	"end": [
							  {
							  	"role": "IntegerParameterNode_Unit_Source",
							  	"entitySet": "IntegerParameterNodes"
							  },
							  {
							  	"role": "IntegerParameterNode_Unit_Target",
							  	"entitySet": "Units"
							  }
						  	]
						  },
						  {
						  	"name": "NodePageItem_Node",
						  	"association": "Self.NodePageItem_Node",
						  	"end": [
							  {
							  	"role": "NodePageItem_Node_Source",
							  	"entitySet": "NodePageItems"
							  },
							  {
							  	"role": "NodePageItem_Node_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "NodePageItem_NodePage",
						  	"association": "Self.NodePageItem_NodePage",
						  	"end": [
							  {
							  	"role": "NodePageItem_NodePage_Source",
							  	"entitySet": "NodePageItems"
							  },
							  {
							  	"role": "NodePageItem_NodePage_Target",
							  	"entitySet": "NodePages"
							  }
						  	]
						  },
						  {
						  	"name": "NodePage_Unit",
						  	"association": "Self.NodePage_Unit",
						  	"end": [
							  {
							  	"role": "NodePage_Unit_Source",
							  	"entitySet": "NodePages"
							  },
							  {
							  	"role": "NodePage_Unit_Target",
							  	"entitySet": "Units"
							  }
						  	]
						  },
						  {
						  	"name": "Unit_Operations",
						  	"association": "Self.Unit_Operations",
						  	"end": [
							  {
							  	"role": "Unit_Operations_Source",
							  	"entitySet": "Units"
							  },
							  {
							  	"role": "Unit_Operations_Target",
							  	"entitySet": "Operations"
							  }
						  	]
						  },
						  {
						  	"name": "ReportNode_Node",
						  	"association": "Self.ReportNode_Node",
						  	"end": [
							  {
							  	"role": "ReportNode_Node_Source",
							  	"entitySet": "ReportNodes"
							  },
							  {
							  	"role": "ReportNode_Node_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "ReportNode_Unit",
						  	"association": "Self.ReportNode_Unit",
						  	"end": [
							  {
							  	"role": "ReportNode_Unit_Source",
							  	"entitySet": "ReportNodes"
							  },
							  {
							  	"role": "ReportNode_Unit_Target",
							  	"entitySet": "Units"
							  }
						  	]
						  },
						  {
						  	"name": "StateNode_Node",
						  	"association": "Self.StateNode_Node",
						  	"end": [
							  {
							  	"role": "StateNode_Node_Source",
							  	"entitySet": "StateNodes"
							  },
							  {
							  	"role": "StateNode_Node_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "StateNode_Unit",
						  	"association": "Self.StateNode_Unit",
						  	"end": [
							  {
							  	"role": "StateNode_Unit_Source",
							  	"entitySet": "StateNodes"
							  },
							  {
							  	"role": "StateNode_Unit_Target",
							  	"entitySet": "Units"
							  }
						  	]
						  },
						  {
						  	"name": "StringParameterNode_Node",
						  	"association": "Self.StringParameterNode_Node",
						  	"end": [
							  {
							  	"role": "StringParameterNode_Node_Source",
							  	"entitySet": "StringParameterNodes"
							  },
							  {
							  	"role": "StringParameterNode_Node_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "StringParameterNode_Unit",
						  	"association": "Self.StringParameterNode_Unit",
						  	"end": [
							  {
							  	"role": "StringParameterNode_Unit_Source",
							  	"entitySet": "StringParameterNodes"
							  },
							  {
							  	"role": "StringParameterNode_Unit_Target",
							  	"entitySet": "Units"
							  }
						  	]
						  },
						  {
						  	"name": "Unit_Zone",
						  	"association": "Self.Unit_Zone",
						  	"end": [
							  {
							  	"role": "Unit_Zone_Source",
							  	"entitySet": "Units"
							  },
							  {
							  	"role": "Unit_Zone_Target",
							  	"entitySet": "Zones"
							  }
						  	]
						  },
						  {
						  	"name": "BoolFormula_Parameter",
						  	"association": "Self.BoolFormula_Parameter",
						  	"end": [
							  {
							  	"role": "BoolFormula_Parameter_Source",
							  	"entitySet": "BoolFormulae"
							  },
							  {
							  	"role": "BoolFormula_Parameter_Target",
							  	"entitySet": "BoolParameters"
							  }
						  	]
						  },
						  {
						  	"name": "DoubleFormula_FormulaStep",
						  	"association": "Self.DoubleFormula_FormulaStep",
						  	"end": [
							  {
							  	"role": "DoubleFormula_FormulaStep_Source",
							  	"entitySet": "DoubleFormulae"
							  },
							  {
							  	"role": "DoubleFormula_FormulaStep_Target",
							  	"entitySet": "FormulaSteps"
							  }
						  	]
						  },
						  {
						  	"name": "DoubleFormula_Parameter",
						  	"association": "Self.DoubleFormula_Parameter",
						  	"end": [
							  {
							  	"role": "DoubleFormula_Parameter_Source",
							  	"entitySet": "DoubleFormulae"
							  },
							  {
							  	"role": "DoubleFormula_Parameter_Target",
							  	"entitySet": "DoubleParameters"
							  }
						  	]
						  },
						  {
						  	"name": "FormulaStep_Formula",
						  	"association": "Self.FormulaStep_Formula",
						  	"end": [
							  {
							  	"role": "FormulaStep_Formula_Source",
							  	"entitySet": "FormulaSteps"
							  },
							  {
							  	"role": "FormulaStep_Formula_Target",
							  	"entitySet": "Formulae"
							  }
						  	]
						  },
						  {
						  	"name": "IntegerFormula_FormulaStep",
						  	"association": "Self.IntegerFormula_FormulaStep",
						  	"end": [
							  {
							  	"role": "IntegerFormula_FormulaStep_Source",
							  	"entitySet": "IntegerFormulae"
							  },
							  {
							  	"role": "IntegerFormula_FormulaStep_Target",
							  	"entitySet": "FormulaSteps"
							  }
						  	]
						  },
						  {
						  	"name": "IntegerFormula_Parameter",
						  	"association": "Self.IntegerFormula_Parameter",
						  	"end": [
							  {
							  	"role": "IntegerFormula_Parameter_Source",
							  	"entitySet": "IntegerFormulae"
							  },
							  {
							  	"role": "IntegerFormula_Parameter_Target",
							  	"entitySet": "IntegerParameters"
							  }
						  	]
						  },
						  {
						  	"name": "ProcedureStep_FormulaSteps",
						  	"association": "Self.ProcedureStep_FormulaSteps",
						  	"end": [
							  {
							  	"role": "ProcedureStep_FormulaSteps_Source",
							  	"entitySet": "ProcedureSteps"
							  },
							  {
							  	"role": "ProcedureStep_FormulaSteps_Target",
							  	"entitySet": "FormulaSteps"
							  }
						  	]
						  },
						  {
						  	"name": "ProcedureStep_Operation",
						  	"association": "Self.ProcedureStep_Operation",
						  	"end": [
							  {
							  	"role": "ProcedureStep_Operation_Source",
							  	"entitySet": "ProcedureSteps"
							  },
							  {
							  	"role": "ProcedureStep_Operation_Target",
							  	"entitySet": "Operations"
							  }
						  	]
						  },
						  {
						  	"name": "UnitProcedure_Procedure",
						  	"association": "Self.UnitProcedure_Procedure",
						  	"end": [
							  {
							  	"role": "UnitProcedure_Procedure_Source",
							  	"entitySet": "UnitProcedures"
							  },
							  {
							  	"role": "UnitProcedure_Procedure_Target",
							  	"entitySet": "Procedures"
							  }
						  	]
						  },
						  {
						  	"name": "UnitProcedure_ProcedureSteps",
						  	"association": "Self.UnitProcedure_ProcedureSteps",
						  	"end": [
							  {
							  	"role": "UnitProcedure_ProcedureSteps_Source",
							  	"entitySet": "UnitProcedures"
							  },
							  {
							  	"role": "UnitProcedure_ProcedureSteps_Target",
							  	"entitySet": "ProcedureSteps"
							  }
						  	]
						  },
						  {
						  	"name": "UnitProcedure_Unit",
						  	"association": "Self.UnitProcedure_Unit",
						  	"end": [
							  {
							  	"role": "UnitProcedure_Unit_Source",
							  	"entitySet": "UnitProcedures"
							  },
							  {
							  	"role": "UnitProcedure_Unit_Target",
							  	"entitySet": "Units"
							  }
						  	]
						  },
						  {
						  	"name": "StringFormula_FormulaStep",
						  	"association": "Self.StringFormula_FormulaStep",
						  	"end": [
							  {
							  	"role": "StringFormula_FormulaStep_Source",
							  	"entitySet": "StringFormulae"
							  },
							  {
							  	"role": "StringFormula_FormulaStep_Target",
							  	"entitySet": "FormulaSteps"
							  }
						  	]
						  },
						  {
						  	"name": "StringFormula_Parameter",
						  	"association": "Self.StringFormula_Parameter",
						  	"end": [
							  {
							  	"role": "StringFormula_Parameter_Source",
							  	"entitySet": "StringFormulae"
							  },
							  {
							  	"role": "StringFormula_Parameter_Target",
							  	"entitySet": "StringParameters"
							  }
						  	]
						  },
						  {
						  	"name": "Formula_Procedure",
						  	"association": "Self.Formula_Procedure",
						  	"end": [
							  {
							  	"role": "Formula_Procedure_Source",
							  	"entitySet": "Formulae"
							  },
							  {
							  	"role": "Formula_Procedure_Target",
							  	"entitySet": "Procedures"
							  }
						  	]
						  },
						  {
						  	"name": "Procedure_Zone",
						  	"association": "Self.Procedure_Zone",
						  	"end": [
							  {
							  	"role": "Procedure_Zone_Source",
							  	"entitySet": "Procedures"
							  },
							  {
							  	"role": "Procedure_Zone_Target",
							  	"entitySet": "Zones"
							  }
						  	]
						  },
						  {
						  	"name": "Zone_RootFolders",
						  	"association": "Self.Zone_RootFolders",
						  	"end": [
							  {
							  	"role": "Zone_RootFolders_Source",
							  	"entitySet": "Zones"
							  },
							  {
							  	"role": "Zone_RootFolders_Target",
							  	"entitySet": "Folders"
							  }
						  	]
						  },
						  {
						  	"name": "ScanClass_Nodes",
						  	"association": "Self.ScanClass_Nodes",
						  	"end": [
							  {
							  	"role": "ScanClass_Nodes_Source",
							  	"entitySet": "ScanClasses"
							  },
							  {
							  	"role": "ScanClass_Nodes_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "ScanClass_Zone",
						  	"association": "Self.ScanClass_Zone",
						  	"end": [
							  {
							  	"role": "ScanClass_Zone_Source",
							  	"entitySet": "ScanClasses"
							  },
							  {
							  	"role": "ScanClass_Zone_Target",
							  	"entitySet": "Zones"
							  }
						  	]
						  },
						  {
						  	"name": "ZoneClearance_Clearance",
						  	"association": "Self.ZoneClearance_Clearance",
						  	"end": [
							  {
							  	"role": "ZoneClearance_Clearance_Source",
							  	"entitySet": "ZoneClearances"
							  },
							  {
							  	"role": "ZoneClearance_Clearance_Target",
							  	"entitySet": "Clearances"
							  }
						  	]
						  },
						  {
						  	"name": "ZoneClearance_Nodes",
						  	"association": "Self.ZoneClearance_Nodes",
						  	"end": [
							  {
							  	"role": "ZoneClearance_Nodes_Source",
							  	"entitySet": "ZoneClearances"
							  },
							  {
							  	"role": "ZoneClearance_Nodes_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "Signature_Group",
						  	"association": "Self.Signature_Group",
						  	"end": [
							  {
							  	"role": "Signature_Group_Source",
							  	"entitySet": "Signatures"
							  },
							  {
							  	"role": "Signature_Group_Target",
							  	"entitySet": "Groups"
							  }
						  	]
						  },
						  {
						  	"name": "Signature_ZoneClearance",
						  	"association": "Self.Signature_ZoneClearance",
						  	"end": [
							  {
							  	"role": "Signature_ZoneClearance_Source",
							  	"entitySet": "Signatures"
							  },
							  {
							  	"role": "Signature_ZoneClearance_Target",
							  	"entitySet": "ZoneClearances"
							  }
						  	]
						  },
						  {
						  	"name": "ZoneClearance_Zone",
						  	"association": "Self.ZoneClearance_Zone",
						  	"end": [
							  {
							  	"role": "ZoneClearance_Zone_Source",
							  	"entitySet": "ZoneClearances"
							  },
							  {
							  	"role": "ZoneClearance_Zone_Target",
							  	"entitySet": "Zones"
							  }
						  	]
						  },
						  {
						  	"name": "Node_Clearance",
						  	"association": "Self.Node_Clearance",
						  	"end": [
							  {
							  	"role": "Node_Clearance_Source",
							  	"entitySet": "Nodes"
							  },
							  {
							  	"role": "Node_Clearance_Target",
							  	"entitySet": "Clearances"
							  }
						  	]
						  },
						  {
						  	"name": "Alarm_Acknowledge",
						  	"association": "Self.Alarm_Acknowledge",
						  	"end": [
							  {
							  	"role": "Alarm_Acknowledge_Source",
							  	"entitySet": "Alarms"
							  },
							  {
							  	"role": "Alarm_Acknowledge_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "Alarm_AlarmSeverity",
						  	"association": "Self.Alarm_AlarmSeverity",
						  	"end": [
							  {
							  	"role": "Alarm_AlarmSeverity_Source",
							  	"entitySet": "Alarms"
							  },
							  {
							  	"role": "Alarm_AlarmSeverity_Target",
							  	"entitySet": "AlarmSeverities"
							  }
						  	]
						  },
						  {
						  	"name": "Alarm_Handshake",
						  	"association": "Self.Alarm_Handshake",
						  	"end": [
							  {
							  	"role": "Alarm_Handshake_Source",
							  	"entitySet": "Alarms"
							  },
							  {
							  	"role": "Alarm_Handshake_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "Alarm_Node",
						  	"association": "Self.Alarm_Node",
						  	"end": [
							  {
							  	"role": "Alarm_Node_Source",
							  	"entitySet": "Alarms"
							  },
							  {
							  	"role": "Alarm_Node_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  },
						  {
						  	"name": "Alarm_Unit",
						  	"association": "Self.Alarm_Unit",
						  	"end": [
							  {
							  	"role": "Alarm_Unit_Source",
							  	"entitySet": "Alarms"
							  },
							  {
							  	"role": "Alarm_Unit_Target",
							  	"entitySet": "Units"
							  }
						  	]
						  },
						  {
						  	"name": "AlarmValue_Alarm",
						  	"association": "Self.AlarmValue_Alarm",
						  	"end": [
							  {
							  	"role": "AlarmValue_Alarm_Source",
							  	"entitySet": "AlarmValues"
							  },
							  {
							  	"role": "AlarmValue_Alarm_Target",
							  	"entitySet": "Alarms"
							  }
						  	]
						  },
						  {
						  	"name": "AlarmValue_Node",
						  	"association": "Self.AlarmValue_Node",
						  	"end": [
							  {
							  	"role": "AlarmValue_Node_Source",
							  	"entitySet": "AlarmValues"
							  },
							  {
							  	"role": "AlarmValue_Node_Target",
							  	"entitySet": "Nodes"
							  }
						  	]
						  }
						]
					  },
					  "entityType": [
						{
							"name": "Account",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Security.Account, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "UserName",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "ScreenName",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "AccessToken",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"interModelRelations": [],
							"commonName": "Account",
							"flexibleRelations": []
						},
						{
							"name": "Alarm",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Database.Alarm, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "AlarmSeverityId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "HandshakeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "AcknowledgeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Acknowledge",
							  	"relationship": "Self.Alarm_Acknowledge",
							  	"fromRole": "Alarm_Acknowledge_Source",
							  	"toRole": "Alarm_Acknowledge_Target"
							  },
							  {
							  	"name": "AlarmSeverity",
							  	"relationship": "Self.Alarm_AlarmSeverity",
							  	"fromRole": "Alarm_AlarmSeverity_Source",
							  	"toRole": "Alarm_AlarmSeverity_Target"
							  },
							  {
							  	"name": "Handshake",
							  	"relationship": "Self.Alarm_Handshake",
							  	"fromRole": "Alarm_Handshake_Source",
							  	"toRole": "Alarm_Handshake_Target"
							  },
							  {
							  	"name": "Node",
							  	"relationship": "Self.Alarm_Node",
							  	"fromRole": "Alarm_Node_Source",
							  	"toRole": "Alarm_Node_Target"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.Alarm_Unit",
							  	"fromRole": "Alarm_Unit_Source",
							  	"toRole": "Alarm_Unit_Target"
							  },
							  {
							  	"name": "Values",
							  	"relationship": "Self.AlarmValue_Alarm",
							  	"fromRole": "AlarmValue_Alarm_Target",
							  	"toRole": "AlarmValue_Alarm_Source"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeAlarm",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "Alarms"
							  }
							],
							"commonName": "Alarm",
							"flexibleRelations": []
						},
						{
							"name": "Node",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Database.Node, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "FolderId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DataType",
							  	"type": "Edm.Self.DataType",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Address",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Min",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Max",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "PlcId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ScanClassId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ZoneId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Uom",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "ClearanceId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Alarms",
							  	"relationship": "Self.Alarm_Node",
							  	"fromRole": "Alarm_Node_Target",
							  	"toRole": "Alarm_Node_Source"
							  },
							  {
							  	"name": "Clearance",
							  	"relationship": "Self.Node_Clearance",
							  	"fromRole": "Node_Clearance_Source",
							  	"toRole": "Node_Clearance_Target"
							  },
							  {
							  	"name": "Folder",
							  	"relationship": "Self.Folder_Nodes",
							  	"fromRole": "Folder_Nodes_Target",
							  	"toRole": "Folder_Nodes_Source"
							  },
							  {
							  	"name": "Plc",
							  	"relationship": "Self.Plc_Nodes",
							  	"fromRole": "Plc_Nodes_Target",
							  	"toRole": "Plc_Nodes_Source"
							  },
							  {
							  	"name": "ScanClass",
							  	"relationship": "Self.ScanClass_Nodes",
							  	"fromRole": "ScanClass_Nodes_Target",
							  	"toRole": "ScanClass_Nodes_Source"
							  }
							],
							"interModelRelations": [],
							"commonName": "Node",
							"flexibleRelations": []
						},
						{
							"name": "Clearance",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Security.Clearance, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "SiteId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "CommandClearances",
							  	"relationship": "Self.CommandClearance_Clearance",
							  	"fromRole": "CommandClearance_Clearance_Target",
							  	"toRole": "CommandClearance_Clearance_Source"
							  },
							  {
							  	"name": "Site",
							  	"relationship": "Self.Site_Clearances",
							  	"fromRole": "Site_Clearances_Target",
							  	"toRole": "Site_Clearances_Source"
							  },
							  {
							  	"name": "ZoneClearances",
							  	"relationship": "Self.ZoneClearance_Clearance",
							  	"fromRole": "ZoneClearance_Clearance_Target",
							  	"toRole": "ZoneClearance_Clearance_Source"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeClearance",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "Clearances"
							  }
							],
							"commonName": "Clearance",
							"flexibleRelations": []
						},
						{
							"name": "CommandClearance",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Security.CommandClearance, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ZoneId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ClearanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "CommandId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Clearance",
							  	"relationship": "Self.CommandClearance_Clearance",
							  	"fromRole": "CommandClearance_Clearance_Source",
							  	"toRole": "CommandClearance_Clearance_Target"
							  },
							  {
							  	"name": "Command",
							  	"relationship": "Self.Command_CommandClearances",
							  	"fromRole": "Command_CommandClearances_Target",
							  	"toRole": "Command_CommandClearances_Source"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.Zone_CommandClearances",
							  	"fromRole": "Zone_CommandClearances_Target",
							  	"toRole": "Zone_CommandClearances_Source"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeCommandClearance",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "CommandClearances"
							  }
							],
							"commonName": "CommandClearance",
							"flexibleRelations": []
						},
						{
							"name": "Command",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Security.Command, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": {
								"name": "CommandClearances",
								"relationship": "Self.Command_CommandClearances",
								"fromRole": "Command_CommandClearances_Source",
								"toRole": "Command_CommandClearances_Target"
							},
							"interModelRelations": [
							  {
							  	"name": "RuntimeCommand",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "Commands"
							  }
							],
							"commonName": "Command",
							"flexibleRelations": []
						},
						{
							"name": "Zone",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Zone, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "SiteId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "CommandClearances",
							  	"relationship": "Self.Zone_CommandClearances",
							  	"fromRole": "Zone_CommandClearances_Source",
							  	"toRole": "Zone_CommandClearances_Target"
							  },
							  {
							  	"name": "Folders",
							  	"relationship": "Self.Folder_Zone",
							  	"fromRole": "Folder_Zone_Target",
							  	"toRole": "Folder_Zone_Source"
							  },
							  {
							  	"name": "Groups",
							  	"relationship": "Self.Group_Zone",
							  	"fromRole": "Group_Zone_Target",
							  	"toRole": "Group_Zone_Source"
							  },
							  {
							  	"name": "Procedures",
							  	"relationship": "Self.Procedure_Zone",
							  	"fromRole": "Procedure_Zone_Target",
							  	"toRole": "Procedure_Zone_Source"
							  },
							  {
							  	"name": "RootFolders",
							  	"relationship": "Self.Zone_RootFolders",
							  	"fromRole": "Zone_RootFolders_Source",
							  	"toRole": "Zone_RootFolders_Target"
							  },
							  {
							  	"name": "ScanClasses",
							  	"relationship": "Self.ScanClass_Zone",
							  	"fromRole": "ScanClass_Zone_Target",
							  	"toRole": "ScanClass_Zone_Source"
							  },
							  {
							  	"name": "Site",
							  	"relationship": "Self.Site_Zones",
							  	"fromRole": "Site_Zones_Target",
							  	"toRole": "Site_Zones_Source"
							  },
							  {
							  	"name": "Units",
							  	"relationship": "Self.Unit_Zone",
							  	"fromRole": "Unit_Zone_Target",
							  	"toRole": "Unit_Zone_Source"
							  },
							  {
							  	"name": "ZoneClearances",
							  	"relationship": "Self.ZoneClearance_Zone",
							  	"fromRole": "ZoneClearance_Zone_Target",
							  	"toRole": "ZoneClearance_Zone_Source"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeZone",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "Zones"
							  }
							],
							"commonName": "Zone",
							"flexibleRelations": []
						},
						{
							"name": "Folder",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Database.Folder, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ParentId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "ZoneId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "RootZoneId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Folders",
							  	"relationship": "Self.Folder_Parent",
							  	"fromRole": "Folder_Parent_Target",
							  	"toRole": "Folder_Parent_Source"
							  },
							  {
							  	"name": "Nodes",
							  	"relationship": "Self.Folder_Nodes",
							  	"fromRole": "Folder_Nodes_Source",
							  	"toRole": "Folder_Nodes_Target"
							  },
							  {
							  	"name": "Parent",
							  	"relationship": "Self.Folder_Parent",
							  	"fromRole": "Folder_Parent_Source",
							  	"toRole": "Folder_Parent_Target"
							  },
							  {
							  	"name": "RootZone",
							  	"relationship": "Self.Zone_RootFolders",
							  	"fromRole": "Zone_RootFolders_Target",
							  	"toRole": "Zone_RootFolders_Source"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.Folder_Zone",
							  	"fromRole": "Folder_Zone_Source",
							  	"toRole": "Folder_Zone_Target"
							  }
							],
							"interModelRelations": [],
							"commonName": "Folder",
							"flexibleRelations": []
						},
						{
							"name": "Group",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Security.Group, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ZoneId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": {
								"name": "Zone",
								"relationship": "Self.Group_Zone",
								"fromRole": "Group_Zone_Source",
								"toRole": "Group_Zone_Target"
							},
							"interModelRelations": [
							  {
							  	"name": "RuntimeGroup",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "Groups"
							  }
							],
							"commonName": "Group",
							"flexibleRelations": []
						},
						{
							"name": "Procedure",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Recipe.Procedure, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ZoneId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Version",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Formulae",
							  	"relationship": "Self.Formula_Procedure",
							  	"fromRole": "Formula_Procedure_Target",
							  	"toRole": "Formula_Procedure_Source"
							  },
							  {
							  	"name": "UnitProcedures",
							  	"relationship": "Self.UnitProcedure_Procedure",
							  	"fromRole": "UnitProcedure_Procedure_Target",
							  	"toRole": "UnitProcedure_Procedure_Source"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.Procedure_Zone",
							  	"fromRole": "Procedure_Zone_Source",
							  	"toRole": "Procedure_Zone_Target"
							  }
							],
							"interModelRelations": [],
							"commonName": "Procedure",
							"flexibleRelations": []
						},
						{
							"name": "Formula",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Recipe.Formula, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ProductId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ProcedureId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Version",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "FormulaSteps",
							  	"relationship": "Self.FormulaStep_Formula",
							  	"fromRole": "FormulaStep_Formula_Target",
							  	"toRole": "FormulaStep_Formula_Source"
							  },
							  {
							  	"name": "Procedure",
							  	"relationship": "Self.Formula_Procedure",
							  	"fromRole": "Formula_Procedure_Source",
							  	"toRole": "Formula_Procedure_Target"
							  },
							  {
							  	"name": "Product",
							  	"relationship": "Self.Product_Formulae",
							  	"fromRole": "Product_Formulae_Target",
							  	"toRole": "Product_Formulae_Source"
							  }
							],
							"interModelRelations": [],
							"commonName": "Formula",
							"flexibleRelations": []
						},
						{
							"name": "FormulaStep",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Recipe.FormulaStep, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "FormulaId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ProcedureStepId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "BoolFormulae",
							  	"relationship": "Self.BoolFormula_FormulaStep",
							  	"fromRole": "BoolFormula_FormulaStep_Target",
							  	"toRole": "BoolFormula_FormulaStep_Source"
							  },
							  {
							  	"name": "DoubleFormulae",
							  	"relationship": "Self.DoubleFormula_FormulaStep",
							  	"fromRole": "DoubleFormula_FormulaStep_Target",
							  	"toRole": "DoubleFormula_FormulaStep_Source"
							  },
							  {
							  	"name": "Formula",
							  	"relationship": "Self.FormulaStep_Formula",
							  	"fromRole": "FormulaStep_Formula_Source",
							  	"toRole": "FormulaStep_Formula_Target"
							  },
							  {
							  	"name": "IntegerFormulae",
							  	"relationship": "Self.IntegerFormula_FormulaStep",
							  	"fromRole": "IntegerFormula_FormulaStep_Target",
							  	"toRole": "IntegerFormula_FormulaStep_Source"
							  },
							  {
							  	"name": "ProcedureStep",
							  	"relationship": "Self.ProcedureStep_FormulaSteps",
							  	"fromRole": "ProcedureStep_FormulaSteps_Target",
							  	"toRole": "ProcedureStep_FormulaSteps_Source"
							  },
							  {
							  	"name": "StringFormulae",
							  	"relationship": "Self.StringFormula_FormulaStep",
							  	"fromRole": "StringFormula_FormulaStep_Target",
							  	"toRole": "StringFormula_FormulaStep_Source"
							  }
							],
							"interModelRelations": [],
							"commonName": "FormulaStep",
							"flexibleRelations": []
						},
						{
							"name": "BoolFormula",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Recipe.Formulae.BoolFormula, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "FormulaStepId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "FormulaStep",
							  	"relationship": "Self.BoolFormula_FormulaStep",
							  	"fromRole": "BoolFormula_FormulaStep_Source",
							  	"toRole": "BoolFormula_FormulaStep_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.BoolFormula_Parameter",
							  	"fromRole": "BoolFormula_Parameter_Source",
							  	"toRole": "BoolFormula_Parameter_Target"
							  }
							],
							"interModelRelations": [],
							"commonName": "BoolFormula",
							"flexibleRelations": []
						},
						{
							"name": "BoolParameter",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Parameters.BoolParameter, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "OperationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Uom",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "DisplayRow",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayColumn",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsRowTitle",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Enumerations",
							  	"relationship": "Self.BoolEnumeration_Parameter",
							  	"fromRole": "BoolEnumeration_Parameter_Target",
							  	"toRole": "BoolEnumeration_Parameter_Source"
							  },
							  {
							  	"name": "Node",
							  	"relationship": "Self.BoolParameter_Node",
							  	"fromRole": "BoolParameter_Node_Source",
							  	"toRole": "BoolParameter_Node_Target"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.Operation_BoolParameters",
							  	"fromRole": "Operation_BoolParameters_Target",
							  	"toRole": "Operation_BoolParameters_Source"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeBoolParameter",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "BoolParameters"
							  }
							],
							"commonName": "BoolParameter",
							"flexibleRelations": []
						},
						{
							"name": "BoolEnumeration",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Parameters.Enumerations.BoolEnumeration, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": {
								"name": "Parameter",
								"relationship": "Self.BoolEnumeration_Parameter",
								"fromRole": "BoolEnumeration_Parameter_Source",
								"toRole": "BoolEnumeration_Parameter_Target"
							},
							"interModelRelations": [
							  {
							  	"name": "RuntimeBoolEnumeration",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "BoolEnumerations"
							  }
							],
							"commonName": "BoolEnumeration",
							"flexibleRelations": []
						},
						{
							"name": "Operation",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Operation, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Version",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Comment",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "BoolParameters",
							  	"relationship": "Self.Operation_BoolParameters",
							  	"fromRole": "Operation_BoolParameters_Source",
							  	"toRole": "Operation_BoolParameters_Target"
							  },
							  {
							  	"name": "DoubleParameters",
							  	"relationship": "Self.DoubleParameter_Operation",
							  	"fromRole": "DoubleParameter_Operation_Target",
							  	"toRole": "DoubleParameter_Operation_Source"
							  },
							  {
							  	"name": "IntegerParameters",
							  	"relationship": "Self.IntegerParameter_Operation",
							  	"fromRole": "IntegerParameter_Operation_Target",
							  	"toRole": "IntegerParameter_Operation_Source"
							  },
							  {
							  	"name": "Reports",
							  	"relationship": "Self.Report_Operation",
							  	"fromRole": "Report_Operation_Target",
							  	"toRole": "Report_Operation_Source"
							  },
							  {
							  	"name": "StringParameters",
							  	"relationship": "Self.StringParameter_Operation",
							  	"fromRole": "StringParameter_Operation_Target",
							  	"toRole": "StringParameter_Operation_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.Unit_Operations",
							  	"fromRole": "Unit_Operations_Target",
							  	"toRole": "Unit_Operations_Source"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeOperation",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "Operations"
							  }
							],
							"commonName": "Operation",
							"flexibleRelations": []
						},
						{
							"name": "DoubleParameter",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Parameters.DoubleParameter, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Min",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Max",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "OperationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Uom",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "DisplayRow",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayColumn",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsRowTitle",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Node",
							  	"relationship": "Self.DoubleParameter_Node",
							  	"fromRole": "DoubleParameter_Node_Source",
							  	"toRole": "DoubleParameter_Node_Target"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.DoubleParameter_Operation",
							  	"fromRole": "DoubleParameter_Operation_Source",
							  	"toRole": "DoubleParameter_Operation_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeDoubleParameter",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "DoubleParameters"
							  }
							],
							"commonName": "DoubleParameter",
							"flexibleRelations": []
						},
						{
							"name": "IntegerParameter",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Parameters.IntegerParameter, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Min",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Max",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "OperationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Uom",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "DisplayRow",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayColumn",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsRowTitle",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Enumerations",
							  	"relationship": "Self.IntegerEnumeration_Parameter",
							  	"fromRole": "IntegerEnumeration_Parameter_Target",
							  	"toRole": "IntegerEnumeration_Parameter_Source"
							  },
							  {
							  	"name": "Node",
							  	"relationship": "Self.IntegerParameter_Node",
							  	"fromRole": "IntegerParameter_Node_Source",
							  	"toRole": "IntegerParameter_Node_Target"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.IntegerParameter_Operation",
							  	"fromRole": "IntegerParameter_Operation_Source",
							  	"toRole": "IntegerParameter_Operation_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeIntegerParameter",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "IntegerParameters"
							  }
							],
							"commonName": "IntegerParameter",
							"flexibleRelations": []
						},
						{
							"name": "IntegerEnumeration",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Parameters.Enumerations.IntegerEnumeration, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": {
								"name": "Parameter",
								"relationship": "Self.IntegerEnumeration_Parameter",
								"fromRole": "IntegerEnumeration_Parameter_Source",
								"toRole": "IntegerEnumeration_Parameter_Target"
							},
							"interModelRelations": [
							  {
							  	"name": "RuntimeIntegerEnumeration",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "IntegerEnumerations"
							  }
							],
							"commonName": "IntegerEnumeration",
							"flexibleRelations": []
						},
						{
							"name": "Report",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Parameters.Report, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "OperationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Uom",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "DisplayRow",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayColumn",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsRowTitle",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Node",
							  	"relationship": "Self.Report_Node",
							  	"fromRole": "Report_Node_Source",
							  	"toRole": "Report_Node_Target"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.Report_Operation",
							  	"fromRole": "Report_Operation_Source",
							  	"toRole": "Report_Operation_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeReport",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "Reports"
							  }
							],
							"commonName": "Report",
							"flexibleRelations": []
						},
						{
							"name": "StringParameter",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Parameters.StringParameter, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "OperationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Uom",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "DisplayRow",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DisplayColumn",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IsRowTitle",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Node",
							  	"relationship": "Self.StringParameter_Node",
							  	"fromRole": "StringParameter_Node_Source",
							  	"toRole": "StringParameter_Node_Target"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.StringParameter_Operation",
							  	"fromRole": "StringParameter_Operation_Source",
							  	"toRole": "StringParameter_Operation_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeStringParameter",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "StringParameters"
							  }
							],
							"commonName": "StringParameter",
							"flexibleRelations": []
						},
						{
							"name": "Unit",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Unit, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ZoneId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "IdNodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "FaultNodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Alarms",
							  	"relationship": "Self.Alarm_Unit",
							  	"fromRole": "Alarm_Unit_Target",
							  	"toRole": "Alarm_Unit_Source"
							  },
							  {
							  	"name": "BoolParameterNodes",
							  	"relationship": "Self.BoolParameterNode_Unit",
							  	"fromRole": "BoolParameterNode_Unit_Target",
							  	"toRole": "BoolParameterNode_Unit_Source"
							  },
							  {
							  	"name": "CommandNodes",
							  	"relationship": "Self.CommandNode_Unit",
							  	"fromRole": "CommandNode_Unit_Target",
							  	"toRole": "CommandNode_Unit_Source"
							  },
							  {
							  	"name": "DataLogNodes",
							  	"relationship": "Self.DataLogNode_Unit",
							  	"fromRole": "DataLogNode_Unit_Target",
							  	"toRole": "DataLogNode_Unit_Source"
							  },
							  {
							  	"name": "DeviceInstances",
							  	"relationship": "Self.DeviceInstance_Unit",
							  	"fromRole": "DeviceInstance_Unit_Target",
							  	"toRole": "DeviceInstance_Unit_Source"
							  },
							  {
							  	"name": "DoubleParameterNodes",
							  	"relationship": "Self.DoubleParameterNode_Unit",
							  	"fromRole": "DoubleParameterNode_Unit_Target",
							  	"toRole": "DoubleParameterNode_Unit_Source"
							  },
							  {
							  	"name": "FaultNode",
							  	"relationship": "Self.Unit_FaultNode",
							  	"fromRole": "Unit_FaultNode_Source",
							  	"toRole": "Unit_FaultNode_Target"
							  },
							  {
							  	"name": "IdNode",
							  	"relationship": "Self.Unit_IdNode",
							  	"fromRole": "Unit_IdNode_Source",
							  	"toRole": "Unit_IdNode_Target"
							  },
							  {
							  	"name": "IntegerParameterNodes",
							  	"relationship": "Self.IntegerParameterNode_Unit",
							  	"fromRole": "IntegerParameterNode_Unit_Target",
							  	"toRole": "IntegerParameterNode_Unit_Source"
							  },
							  {
							  	"name": "NodePages",
							  	"relationship": "Self.NodePage_Unit",
							  	"fromRole": "NodePage_Unit_Target",
							  	"toRole": "NodePage_Unit_Source"
							  },
							  {
							  	"name": "Operations",
							  	"relationship": "Self.Unit_Operations",
							  	"fromRole": "Unit_Operations_Source",
							  	"toRole": "Unit_Operations_Target"
							  },
							  {
							  	"name": "ReportNodes",
							  	"relationship": "Self.ReportNode_Unit",
							  	"fromRole": "ReportNode_Unit_Target",
							  	"toRole": "ReportNode_Unit_Source"
							  },
							  {
							  	"name": "StateNodes",
							  	"relationship": "Self.StateNode_Unit",
							  	"fromRole": "StateNode_Unit_Target",
							  	"toRole": "StateNode_Unit_Source"
							  },
							  {
							  	"name": "StringParameterNodes",
							  	"relationship": "Self.StringParameterNode_Unit",
							  	"fromRole": "StringParameterNode_Unit_Target",
							  	"toRole": "StringParameterNode_Unit_Source"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.Unit_Zone",
							  	"fromRole": "Unit_Zone_Source",
							  	"toRole": "Unit_Zone_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeUnit",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "Units"
							  }
							],
							"commonName": "Unit",
							"flexibleRelations": []
						},
						{
							"name": "BoolParameterNode",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Nodes.BoolParameterNode, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Node",
							  	"relationship": "Self.BoolParameterNode_Node",
							  	"fromRole": "BoolParameterNode_Node_Source",
							  	"toRole": "BoolParameterNode_Node_Target"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.BoolParameterNode_Unit",
							  	"fromRole": "BoolParameterNode_Unit_Source",
							  	"toRole": "BoolParameterNode_Unit_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeBoolParameterNode",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "BoolParameterNodes"
							  }
							],
							"commonName": "BoolParameterNode",
							"flexibleRelations": []
						},
						{
							"name": "CommandNode",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Nodes.CommandNode, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "PermissionNodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Node",
							  	"relationship": "Self.CommandNode_Node",
							  	"fromRole": "CommandNode_Node_Source",
							  	"toRole": "CommandNode_Node_Target"
							  },
							  {
							  	"name": "PermissionNode",
							  	"relationship": "Self.CommandNode_PermissionNode",
							  	"fromRole": "CommandNode_PermissionNode_Source",
							  	"toRole": "CommandNode_PermissionNode_Target"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.CommandNode_Unit",
							  	"fromRole": "CommandNode_Unit_Source",
							  	"toRole": "CommandNode_Unit_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeCommandNode",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "CommandNodes"
							  }
							],
							"commonName": "CommandNode",
							"flexibleRelations": []
						},
						{
							"name": "DataLogNode",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Nodes.DataLogNode, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Colour",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Node",
							  	"relationship": "Self.DataLogNode_Node",
							  	"fromRole": "DataLogNode_Node_Source",
							  	"toRole": "DataLogNode_Node_Target"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.DataLogNode_Unit",
							  	"fromRole": "DataLogNode_Unit_Source",
							  	"toRole": "DataLogNode_Unit_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeDataLogNode",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "DataLogNodes"
							  }
							],
							"commonName": "DataLogNode",
							"flexibleRelations": []
						},
						{
							"name": "DeviceInstance",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Devices.DeviceInstance, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "DeviceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "X",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Y",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Rotate",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Scale",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Device",
							  	"relationship": "Self.Device_DeviceInstances",
							  	"fromRole": "Device_DeviceInstances_Target",
							  	"toRole": "Device_DeviceInstances_Source"
							  },
							  {
							  	"name": "DeviceInstanceDisplays",
							  	"relationship": "Self.DeviceInstanceDisplay_DeviceInstance",
							  	"fromRole": "DeviceInstanceDisplay_DeviceInstance_Target",
							  	"toRole": "DeviceInstanceDisplay_DeviceInstance_Source"
							  },
							  {
							  	"name": "DeviceInstanceTags",
							  	"relationship": "Self.DeviceInstanceTag_DeviceInstance",
							  	"fromRole": "DeviceInstanceTag_DeviceInstance_Target",
							  	"toRole": "DeviceInstanceTag_DeviceInstance_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.DeviceInstance_Unit",
							  	"fromRole": "DeviceInstance_Unit_Source",
							  	"toRole": "DeviceInstance_Unit_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeDeviceInstance",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "DeviceInstances"
							  }
							],
							"commonName": "DeviceInstance",
							"flexibleRelations": []
						},
						{
							"name": "Device",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Devices.Device, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "SiteId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Display",
							  	"type": "Edm.String",
							  	"maxLength": "50000",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "DeviceDisplays",
							  	"relationship": "Self.DeviceDisplay_Device",
							  	"fromRole": "DeviceDisplay_Device_Target",
							  	"toRole": "DeviceDisplay_Device_Source"
							  },
							  {
							  	"name": "DeviceInstances",
							  	"relationship": "Self.Device_DeviceInstances",
							  	"fromRole": "Device_DeviceInstances_Source",
							  	"toRole": "Device_DeviceInstances_Target"
							  },
							  {
							  	"name": "DeviceTags",
							  	"relationship": "Self.DeviceTag_Device",
							  	"fromRole": "DeviceTag_Device_Target",
							  	"toRole": "DeviceTag_Device_Source"
							  },
							  {
							  	"name": "Site",
							  	"relationship": "Self.Device_Site",
							  	"fromRole": "Device_Site_Source",
							  	"toRole": "Device_Site_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeDevice",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "Devices"
							  }
							],
							"commonName": "Device",
							"flexibleRelations": []
						},
						{
							"name": "DeviceDisplay",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Devices.DeviceDisplay, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "DeviceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Display",
							  	"type": "Edm.String",
							  	"maxLength": "50000",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "X",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Y",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MinScale",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "MaxScale",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Device",
							  	"relationship": "Self.DeviceDisplay_Device",
							  	"fromRole": "DeviceDisplay_Device_Source",
							  	"toRole": "DeviceDisplay_Device_Target"
							  },
							  {
							  	"name": "DeviceInstanceDisplays",
							  	"relationship": "Self.DeviceInstanceDisplay_DeviceDisplay",
							  	"fromRole": "DeviceInstanceDisplay_DeviceDisplay_Target",
							  	"toRole": "DeviceInstanceDisplay_DeviceDisplay_Source"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeDeviceDisplay",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "DeviceDisplays"
							  }
							],
							"commonName": "DeviceDisplay",
							"flexibleRelations": []
						},
						{
							"name": "DeviceInstanceDisplay",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Devices.DeviceInstanceDisplay, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "DeviceInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "X",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "Y",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "Scale",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Rotate",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Include",
							  	"type": "Edm.Boolean",
							  	"nullable": "false"
							  },
							  {
							  	"name": "MinScale",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "MaxScale",
							  	"type": "Edm.Double"
							  },
							  {
							  	"name": "Display",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "DeviceDisplayId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "DeviceDisplay",
							  	"relationship": "Self.DeviceInstanceDisplay_DeviceDisplay",
							  	"fromRole": "DeviceInstanceDisplay_DeviceDisplay_Source",
							  	"toRole": "DeviceInstanceDisplay_DeviceDisplay_Target"
							  },
							  {
							  	"name": "DeviceInstance",
							  	"relationship": "Self.DeviceInstanceDisplay_DeviceInstance",
							  	"fromRole": "DeviceInstanceDisplay_DeviceInstance_Source",
							  	"toRole": "DeviceInstanceDisplay_DeviceInstance_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeDeviceInstanceDisplay",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "DeviceInstanceDisplays"
							  }
							],
							"commonName": "DeviceInstanceDisplay",
							"flexibleRelations": []
						},
						{
							"name": "DeviceTag",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Devices.DeviceTag, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "DeviceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Device",
							  	"relationship": "Self.DeviceTag_Device",
							  	"fromRole": "DeviceTag_Device_Source",
							  	"toRole": "DeviceTag_Device_Target"
							  },
							  {
							  	"name": "DeviceInstanceTags",
							  	"relationship": "Self.DeviceInstanceTag_DeviceTag",
							  	"fromRole": "DeviceInstanceTag_DeviceTag_Target",
							  	"toRole": "DeviceInstanceTag_DeviceTag_Source"
							  }
							],
							"interModelRelations": [],
							"commonName": "DeviceTag",
							"flexibleRelations": []
						},
						{
							"name": "DeviceInstanceTag",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Devices.DeviceInstanceTag, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "DeviceInstanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "DeviceTagId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "DeviceInstance",
							  	"relationship": "Self.DeviceInstanceTag_DeviceInstance",
							  	"fromRole": "DeviceInstanceTag_DeviceInstance_Source",
							  	"toRole": "DeviceInstanceTag_DeviceInstance_Target"
							  },
							  {
							  	"name": "DeviceTag",
							  	"relationship": "Self.DeviceInstanceTag_DeviceTag",
							  	"fromRole": "DeviceInstanceTag_DeviceTag_Source",
							  	"toRole": "DeviceInstanceTag_DeviceTag_Target"
							  },
							  {
							  	"name": "Node",
							  	"relationship": "Self.DeviceInstanceTag_Node",
							  	"fromRole": "DeviceInstanceTag_Node_Source",
							  	"toRole": "DeviceInstanceTag_Node_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeDeviceInstanceTag",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "DeviceInstanceTags"
							  }
							],
							"commonName": "DeviceInstanceTag",
							"flexibleRelations": []
						},
						{
							"name": "Site",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Organisation.Site, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "EnterpriseId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "AlarmSeverities",
							  	"relationship": "Self.AlarmSeverity_Site",
							  	"fromRole": "AlarmSeverity_Site_Target",
							  	"toRole": "AlarmSeverity_Site_Source"
							  },
							  {
							  	"name": "Clearances",
							  	"relationship": "Self.Site_Clearances",
							  	"fromRole": "Site_Clearances_Source",
							  	"toRole": "Site_Clearances_Target"
							  },
							  {
							  	"name": "Devices",
							  	"relationship": "Self.Device_Site",
							  	"fromRole": "Device_Site_Target",
							  	"toRole": "Device_Site_Source"
							  },
							  {
							  	"name": "Enterprise",
							  	"relationship": "Self.Enterprise_Sites",
							  	"fromRole": "Enterprise_Sites_Target",
							  	"toRole": "Enterprise_Sites_Source"
							  },
							  {
							  	"name": "Plcs",
							  	"relationship": "Self.Plc_Site",
							  	"fromRole": "Plc_Site_Target",
							  	"toRole": "Plc_Site_Source"
							  },
							  {
							  	"name": "Zones",
							  	"relationship": "Self.Site_Zones",
							  	"fromRole": "Site_Zones_Source",
							  	"toRole": "Site_Zones_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeSite",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "Sites"
							  }
							],
							"commonName": "Site",
							"flexibleRelations": []
						},
						{
							"name": "AlarmSeverity",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Database.AlarmSeverity, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Colour",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "SiteId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": {
								"name": "Site",
								"relationship": "Self.AlarmSeverity_Site",
								"fromRole": "AlarmSeverity_Site_Source",
								"toRole": "AlarmSeverity_Site_Target"
							},
							"interModelRelations": [
							  {
							  	"name": "RuntimeAlarmSeverity",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "AlarmSeverities"
							  }
							],
							"commonName": "AlarmSeverity",
							"flexibleRelations": []
						},
						{
							"name": "Enterprise",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Organisation.Enterprise, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ApplicationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Application",
							  	"relationship": "Self.Application_Enterprises",
							  	"fromRole": "Application_Enterprises_Target",
							  	"toRole": "Application_Enterprises_Source"
							  },
							  {
							  	"name": "Products",
							  	"relationship": "Self.Product_Enterprise",
							  	"fromRole": "Product_Enterprise_Target",
							  	"toRole": "Product_Enterprise_Source"
							  },
							  {
							  	"name": "Sites",
							  	"relationship": "Self.Enterprise_Sites",
							  	"fromRole": "Enterprise_Sites_Source",
							  	"toRole": "Enterprise_Sites_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeEnterprise",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "Enterprises"
							  }
							],
							"commonName": "Enterprise",
							"flexibleRelations": []
						},
						{
							"name": "Application",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Sys.Application, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": {
								"name": "Enterprises",
								"relationship": "Self.Application_Enterprises",
								"fromRole": "Application_Enterprises_Source",
								"toRole": "Application_Enterprises_Target"
							},
							"interModelRelations": [
							  {
							  	"name": "RuntimeApplication",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "Applications"
							  }
							],
							"commonName": "Application",
							"flexibleRelations": []
						},
						{
							"name": "Product",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Recipe.Product, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "EnterpriseId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Enterprise",
							  	"relationship": "Self.Product_Enterprise",
							  	"fromRole": "Product_Enterprise_Source",
							  	"toRole": "Product_Enterprise_Target"
							  },
							  {
							  	"name": "Formulae",
							  	"relationship": "Self.Product_Formulae",
							  	"fromRole": "Product_Formulae_Source",
							  	"toRole": "Product_Formulae_Target"
							  }
							],
							"interModelRelations": [],
							"commonName": "Product",
							"flexibleRelations": []
						},
						{
							"name": "Plc",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Database.Plc, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Machine",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Server",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Type",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Address",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "SiteId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Nodes",
							  	"relationship": "Self.Plc_Nodes",
							  	"fromRole": "Plc_Nodes_Source",
							  	"toRole": "Plc_Nodes_Target"
							  },
							  {
							  	"name": "Site",
							  	"relationship": "Self.Plc_Site",
							  	"fromRole": "Plc_Site_Source",
							  	"toRole": "Plc_Site_Target"
							  }
							],
							"interModelRelations": [],
							"commonName": "Plc",
							"flexibleRelations": []
						},
						{
							"name": "DoubleParameterNode",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Nodes.DoubleParameterNode, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Node",
							  	"relationship": "Self.DoubleParameterNode_Node",
							  	"fromRole": "DoubleParameterNode_Node_Source",
							  	"toRole": "DoubleParameterNode_Node_Target"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.DoubleParameterNode_Unit",
							  	"fromRole": "DoubleParameterNode_Unit_Source",
							  	"toRole": "DoubleParameterNode_Unit_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeDoubleParameterNode",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "DoubleParameterNodes"
							  }
							],
							"commonName": "DoubleParameterNode",
							"flexibleRelations": []
						},
						{
							"name": "IntegerParameterNode",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Nodes.IntegerParameterNode, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Node",
							  	"relationship": "Self.IntegerParameterNode_Node",
							  	"fromRole": "IntegerParameterNode_Node_Source",
							  	"toRole": "IntegerParameterNode_Node_Target"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.IntegerParameterNode_Unit",
							  	"fromRole": "IntegerParameterNode_Unit_Source",
							  	"toRole": "IntegerParameterNode_Unit_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeIntegerParameterNode",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "IntegerParameterNodes"
							  }
							],
							"commonName": "IntegerParameterNode",
							"flexibleRelations": []
						},
						{
							"name": "NodePage",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.NodePages.NodePage, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "NodePageItems",
							  	"relationship": "Self.NodePageItem_NodePage",
							  	"fromRole": "NodePageItem_NodePage_Target",
							  	"toRole": "NodePageItem_NodePage_Source"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.NodePage_Unit",
							  	"fromRole": "NodePage_Unit_Source",
							  	"toRole": "NodePage_Unit_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeNodePage",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "NodePages"
							  }
							],
							"commonName": "NodePage",
							"flexibleRelations": []
						},
						{
							"name": "NodePageItem",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.NodePages.NodePageItem, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodePageId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Node",
							  	"relationship": "Self.NodePageItem_Node",
							  	"fromRole": "NodePageItem_Node_Source",
							  	"toRole": "NodePageItem_Node_Target"
							  },
							  {
							  	"name": "NodePage",
							  	"relationship": "Self.NodePageItem_NodePage",
							  	"fromRole": "NodePageItem_NodePage_Source",
							  	"toRole": "NodePageItem_NodePage_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeNodePageItem",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "NodePageItems"
							  }
							],
							"commonName": "NodePageItem",
							"flexibleRelations": []
						},
						{
							"name": "ReportNode",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Nodes.ReportNode, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Node",
							  	"relationship": "Self.ReportNode_Node",
							  	"fromRole": "ReportNode_Node_Source",
							  	"toRole": "ReportNode_Node_Target"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.ReportNode_Unit",
							  	"fromRole": "ReportNode_Unit_Source",
							  	"toRole": "ReportNode_Unit_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeReportNode",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "ReportNodes"
							  }
							],
							"commonName": "ReportNode",
							"flexibleRelations": []
						},
						{
							"name": "StateNode",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Nodes.StateNode, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Colour",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Node",
							  	"relationship": "Self.StateNode_Node",
							  	"fromRole": "StateNode_Node_Source",
							  	"toRole": "StateNode_Node_Target"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.StateNode_Unit",
							  	"fromRole": "StateNode_Unit_Source",
							  	"toRole": "StateNode_Unit_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeStateNode",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "StateNodes"
							  }
							],
							"commonName": "StateNode",
							"flexibleRelations": []
						},
						{
							"name": "StringParameterNode",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Equipment.Nodes.StringParameterNode, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Node",
							  	"relationship": "Self.StringParameterNode_Node",
							  	"fromRole": "StringParameterNode_Node_Source",
							  	"toRole": "StringParameterNode_Node_Target"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.StringParameterNode_Unit",
							  	"fromRole": "StringParameterNode_Unit_Source",
							  	"toRole": "StringParameterNode_Unit_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeStringParameterNode",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "StringParameterNodes"
							  }
							],
							"commonName": "StringParameterNode",
							"flexibleRelations": []
						},
						{
							"name": "DoubleFormula",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Recipe.Formulae.DoubleFormula, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Min",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Max",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Double",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "FormulaStepId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "FormulaStep",
							  	"relationship": "Self.DoubleFormula_FormulaStep",
							  	"fromRole": "DoubleFormula_FormulaStep_Source",
							  	"toRole": "DoubleFormula_FormulaStep_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.DoubleFormula_Parameter",
							  	"fromRole": "DoubleFormula_Parameter_Source",
							  	"toRole": "DoubleFormula_Parameter_Target"
							  }
							],
							"interModelRelations": [],
							"commonName": "DoubleFormula",
							"flexibleRelations": []
						},
						{
							"name": "IntegerFormula",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Recipe.Formulae.IntegerFormula, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Min",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Max",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "FormulaStepId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "FormulaStep",
							  	"relationship": "Self.IntegerFormula_FormulaStep",
							  	"fromRole": "IntegerFormula_FormulaStep_Source",
							  	"toRole": "IntegerFormula_FormulaStep_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.IntegerFormula_Parameter",
							  	"fromRole": "IntegerFormula_Parameter_Source",
							  	"toRole": "IntegerFormula_Parameter_Target"
							  }
							],
							"interModelRelations": [],
							"commonName": "IntegerFormula",
							"flexibleRelations": []
						},
						{
							"name": "ProcedureStep",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Recipe.ProcedureStep, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "UnitProcedureId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "OperationId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "FormulaSteps",
							  	"relationship": "Self.ProcedureStep_FormulaSteps",
							  	"fromRole": "ProcedureStep_FormulaSteps_Source",
							  	"toRole": "ProcedureStep_FormulaSteps_Target"
							  },
							  {
							  	"name": "Operation",
							  	"relationship": "Self.ProcedureStep_Operation",
							  	"fromRole": "ProcedureStep_Operation_Source",
							  	"toRole": "ProcedureStep_Operation_Target"
							  },
							  {
							  	"name": "UnitProcedure",
							  	"relationship": "Self.UnitProcedure_ProcedureSteps",
							  	"fromRole": "UnitProcedure_ProcedureSteps_Target",
							  	"toRole": "UnitProcedure_ProcedureSteps_Source"
							  }
							],
							"interModelRelations": [],
							"commonName": "ProcedureStep",
							"flexibleRelations": []
						},
						{
							"name": "UnitProcedure",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Recipe.UnitProcedure, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ProcedureId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UnitId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Count",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Procedure",
							  	"relationship": "Self.UnitProcedure_Procedure",
							  	"fromRole": "UnitProcedure_Procedure_Source",
							  	"toRole": "UnitProcedure_Procedure_Target"
							  },
							  {
							  	"name": "ProcedureSteps",
							  	"relationship": "Self.UnitProcedure_ProcedureSteps",
							  	"fromRole": "UnitProcedure_ProcedureSteps_Source",
							  	"toRole": "UnitProcedure_ProcedureSteps_Target"
							  },
							  {
							  	"name": "Unit",
							  	"relationship": "Self.UnitProcedure_Unit",
							  	"fromRole": "UnitProcedure_Unit_Source",
							  	"toRole": "UnitProcedure_Unit_Target"
							  }
							],
							"interModelRelations": [],
							"commonName": "UnitProcedure",
							"flexibleRelations": []
						},
						{
							"name": "StringFormula",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Recipe.Formulae.StringFormula, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "Value",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "ParameterId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "FormulaStepId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "FormulaStep",
							  	"relationship": "Self.StringFormula_FormulaStep",
							  	"fromRole": "StringFormula_FormulaStep_Source",
							  	"toRole": "StringFormula_FormulaStep_Target"
							  },
							  {
							  	"name": "Parameter",
							  	"relationship": "Self.StringFormula_Parameter",
							  	"fromRole": "StringFormula_Parameter_Source",
							  	"toRole": "StringFormula_Parameter_Target"
							  }
							],
							"interModelRelations": [],
							"commonName": "StringFormula",
							"flexibleRelations": []
						},
						{
							"name": "ScanClass",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Database.ScanClass, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ZoneId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UpdateRate",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Nodes",
							  	"relationship": "Self.ScanClass_Nodes",
							  	"fromRole": "ScanClass_Nodes_Source",
							  	"toRole": "ScanClass_Nodes_Target"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.ScanClass_Zone",
							  	"fromRole": "ScanClass_Zone_Source",
							  	"toRole": "ScanClass_Zone_Target"
							  }
							],
							"interModelRelations": [],
							"commonName": "ScanClass",
							"flexibleRelations": []
						},
						{
							"name": "ZoneClearance",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Security.ZoneClearance, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ClearanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "ZoneId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Clearance",
							  	"relationship": "Self.ZoneClearance_Clearance",
							  	"fromRole": "ZoneClearance_Clearance_Source",
							  	"toRole": "ZoneClearance_Clearance_Target"
							  },
							  {
							  	"name": "Nodes",
							  	"relationship": "Self.ZoneClearance_Nodes",
							  	"fromRole": "ZoneClearance_Nodes_Source",
							  	"toRole": "ZoneClearance_Nodes_Target"
							  },
							  {
							  	"name": "Signatures",
							  	"relationship": "Self.Signature_ZoneClearance",
							  	"fromRole": "Signature_ZoneClearance_Target",
							  	"toRole": "Signature_ZoneClearance_Source"
							  },
							  {
							  	"name": "Zone",
							  	"relationship": "Self.ZoneClearance_Zone",
							  	"fromRole": "ZoneClearance_Zone_Source",
							  	"toRole": "ZoneClearance_Zone_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeZoneClearance",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "ZoneClearances"
							  }
							],
							"commonName": "ZoneClearance",
							"flexibleRelations": []
						},
						{
							"name": "Signature",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Security.Signature, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "ZoneClearanceId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "GroupId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Group",
							  	"relationship": "Self.Signature_Group",
							  	"fromRole": "Signature_Group_Source",
							  	"toRole": "Signature_Group_Target"
							  },
							  {
							  	"name": "ZoneClearance",
							  	"relationship": "Self.Signature_ZoneClearance",
							  	"fromRole": "Signature_ZoneClearance_Source",
							  	"toRole": "Signature_ZoneClearance_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeSignature",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "Signatures"
							  }
							],
							"commonName": "Signature",
							"flexibleRelations": []
						},
						{
							"name": "AlarmValue",
							"customannotation:ClrType": "SiGyl.Models.Areas.Configuration.Database.AlarmValue, SiGyl.Models.Areas.Configuration, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
							"key": {
								"propertyRef": {
									"name": "Id"
								}
							},
							"property": [
							  {
							  	"name": "Id",
							  	"type": "Edm.Int32",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Identity"
							  },
							  {
							  	"name": "NodeId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "AlarmId",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Index",
							  	"type": "Edm.Int32",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Name",
							  	"type": "Edm.String",
							  	"maxLength": "256",
							  	"fixedLength": "false",
							  	"unicode": "true",
							  	"nullable": "false"
							  },
							  {
							  	"name": "Description",
							  	"type": "Edm.String",
							  	"maxLength": "Max",
							  	"fixedLength": "false",
							  	"unicode": "true"
							  },
							  {
							  	"name": "Timestamp",
							  	"type": "Edm.Binary",
							  	"concurrencyMode": "Fixed",
							  	"maxLength": "8",
							  	"fixedLength": "false",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "CreatedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false",
							  	"annotation:StoreGeneratedPattern": "Computed"
							  },
							  {
							  	"name": "ModifiedOn",
							  	"type": "Edm.DateTime",
							  	"nullable": "false"
							  },
							  {
							  	"name": "UserIdCreated",
							  	"type": "Edm.Int32"
							  }
							],
							"navigationProperty": [
							  {
							  	"name": "Alarm",
							  	"relationship": "Self.AlarmValue_Alarm",
							  	"fromRole": "AlarmValue_Alarm_Source",
							  	"toRole": "AlarmValue_Alarm_Target"
							  },
							  {
							  	"name": "Node",
							  	"relationship": "Self.AlarmValue_Node",
							  	"fromRole": "AlarmValue_Node_Source",
							  	"toRole": "AlarmValue_Node_Target"
							  }
							],
							"interModelRelations": [
							  {
							  	"name": "RuntimeAlarmValue",
							  	"model": "runtime",
							  	"key": "Id",
							  	"foreignKey": "ConfigurationId",
							  	"collection": "AlarmValues"
							  }
							],
							"commonName": "AlarmValue",
							"flexibleRelations": []
						}
					  ]
					}
				}

			}
		};

	});

}).call(this);
