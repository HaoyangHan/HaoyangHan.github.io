/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = 'Haoyang Han'
var formattedName = HTMLheaderName.replace('%data%', name)
var role = 'New Grad'
var formattedRole = HTMLheaderRole.replace('%data%', role)

$("#header").prepend(formattedRole)
$("#header").prepend(formattedName)
