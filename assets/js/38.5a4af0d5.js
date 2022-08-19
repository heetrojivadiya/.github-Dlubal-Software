(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{309:function(t,e,a){"use strict";a.r(e);var o=a(13),r=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"types-for-solids"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#types-for-solids"}},[t._v("#")]),t._v(" Types for Solids")]),t._v(" "),e("p",[t._v("Go to "),e("em",[e("a",{attrs:{href:"https://github.com/Dlubal-Software/RFEM_Python_Client/tree/main/RFEM/TypesForSolids",target:"_blank",rel:"noopener noreferrer"}},[t._v("[source]"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"solidcontact"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solidcontact"}},[t._v("#")]),t._v(" SolidContact")]),t._v(" "),e("h3",{attrs:{id:"solidcontact-no-perpendicular-contact-parallel-contact-contact-parameters-solids-comment-params-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solidcontact-no-perpendicular-contact-parallel-contact-contact-parameters-solids-comment-params-model"}},[t._v("#")]),t._v(" SolidContact(no, perpendicular_contact, parallel_contact, contact_parameters, solids, comment, params, model)")]),t._v(" "),e("p",[t._v("Solid Contact")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Parameters")])]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("no")]),t._v(" ("),e("em",[t._v("int")]),t._v(") – Solid Contact Tag")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("perpendicular_contact")]),t._v(" ("),e("em",[t._v("enum")]),t._v(") – Solid Contact Perpendicular Type Enumeration")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("parallel_contact")]),t._v(" ("),e("em",[t._v("enum")]),t._v(") – Solid Contact Parallel Type Enumeration")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("contact_parameters")]),t._v(" ("),e("em",[t._v("list")]),t._v(") – Contact Parameters List")]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("for parallel_contact == SolidContactParallelType.RIGID_FRICTION:"),e("br"),t._v("\ncontact_parameters = [friction_coefficient]")])])]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("for parallel_contact == SolidContactParallelType.RIGID_FRICTION_LIMIT:"),e("br"),t._v("\ncontact_parameters = [limit_stress]")])])]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("for parallel_contact == SolidContactParallelType.ELASTIC_FRICTION:"),e("br"),t._v("\ncontact_parameters = [shear_stiffness, friction_coefficient]")])])]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("for parallel_contact == SolidContactParallelType.ELASTIC_FRICTION_LIMIT:"),e("br"),t._v("\ncontact_parameters = [shear_stiffness, limit_stress]")])])]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("for parallel_contact == SolidContactParallelType.ELASTIC_SOLID:"),e("br"),t._v("\ncontact_parameters = [shear_stiffness]")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("solids")]),t._v(" ("),e("em",[t._v("str")]),t._v(") – Assigned to Solids")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("comment")]),t._v(" ("),e("em",[t._v("str")]),t._v(", "),e("em",[t._v("optional")]),t._v(") – Comment")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("params")]),t._v(" ("),e("em",[t._v("dict")]),t._v(", "),e("em",[t._v("optional")]),t._v(") – Any WS Parameter relevant to the object and its value in form of a dictionary")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("model")]),t._v(" ("),e("em",[t._v("RFEM Class, optional")]),t._v("): Model to be edited")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Raises")])]),t._v(" "),e("p",[e("strong",[t._v("ValueError")]),t._v(" : There are no parameters for given parallel contact.")])])]),t._v(" "),e("h2",{attrs:{id:"solidgas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solidgas"}},[t._v("#")]),t._v(" SolidGas")]),t._v(" "),e("h3",{attrs:{id:"solidgas-no-pressure-temperature-solids-comment-params-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solidgas-no-pressure-temperature-solids-comment-params-model"}},[t._v("#")]),t._v(" SolidGas(no, pressure, temperature, solids, comment, params, model)")]),t._v(" "),e("p",[t._v("Gas Solids")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Parameters")])]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("no")]),t._v(" ("),e("em",[t._v("int")]),t._v(") – Solid Contact Tag")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("pressure")]),t._v(" ("),e("em",[t._v("float")]),t._v(") – Preassure in Pascals")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("temperature")]),t._v(" ("),e("em",[t._v("float")]),t._v(") – Temperature in Kelvins")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("solids")]),t._v(" ("),e("em",[t._v("str")]),t._v(") – Assigned to Solids")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("comment")]),t._v(" ("),e("em",[t._v("str")]),t._v(", "),e("em",[t._v("optional")]),t._v(") – Comment")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("params")]),t._v(" ("),e("em",[t._v("dict")]),t._v(", "),e("em",[t._v("optional")]),t._v(") – Any WS Parameter relevant to the object and its value in form of a dictionary")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("model")]),t._v(" ("),e("em",[t._v("RFEM Class, optional")]),t._v("): Model to be edited")])])])])]),t._v(" "),e("h2",{attrs:{id:"solidmeshrefinement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solidmeshrefinement"}},[t._v("#")]),t._v(" SolidMeshRefinement")]),t._v(" "),e("h3",{attrs:{id:"solidmeshrefinement-no-target-length-solids-comment-params-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solidmeshrefinement-no-target-length-solids-comment-params-model"}},[t._v("#")]),t._v(" SolidMeshRefinement(no, target_length, solids, comment, params, model)")]),t._v(" "),e("p",[t._v("Solids Mesh Refinemet")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Parameters")])]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("no")]),t._v(" ("),e("em",[t._v("int")]),t._v(") – Solid Contact Tag")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("target_length")]),t._v(" ("),e("em",[t._v("float")]),t._v(") – Target FE Length")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("solids")]),t._v(" ("),e("em",[t._v("str")]),t._v(") – Assigned to Solids")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("comment")]),t._v(" ("),e("em",[t._v("str")]),t._v(", "),e("em",[t._v("optional")]),t._v(") – Comment")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("params")]),t._v(" ("),e("em",[t._v("dict")]),t._v(", "),e("em",[t._v("optional")]),t._v(") – Any WS Parameter relevant to the object and its value in form of a dictionary")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("model")]),t._v(" ("),e("em",[t._v("RFEM Class, optional")]),t._v("): Model to be edited")])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);