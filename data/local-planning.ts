import { allServiceLocations, type ServiceLocation } from '@/data/service-locations';
export const localPlanning: Record<string, [string, string]> = {
  'Idaho Falls': ['For projects around Downtown, Snake River Landing or the west side, identify the exact building entrance and who can release each area for cleaning.', 'For multi-tenant offices, separate common-area tasks from private-suite responsibilities before choosing a schedule.'],
  'Ammon': ['For a retail buildout or new space, confirm when fixtures and deliveries will be finished so the final pass is not followed by more trade dust.', 'Separate customer entrances, staff rooms and shared landlord areas in the recurring scope.'],
  'Shelley': ['For a phased handover, list the rooms that are released and the areas still occupied by trades before requesting a cleanup date.', 'Confirm whether the request is for an office, public-facing space or support area within a larger property.'],
  'Blackfoot': ['For a project along the US-91 corridor or downtown, include loading access and debris-disposal responsibility in the request.', 'For facilities with office and operational zones, identify which rooms are available during the cleaning window.'],
  'Pocatello': ['For Old Town or university-area work, confirm parking, entry access and occupied areas alongside the handover deadline.', 'For buildings with changing occupancy, set restroom and entry frequencies by use rather than total square footage alone.'],
  'Chubbuck': ['For a commercial buildout, separate construction debris removal from detailed cleaning of installed fixtures and customer areas.', 'For customer-facing facilities, plan entries, checkout or reception areas and restrooms around opening hours.'],
  'Rexburg': ['For projects with a scheduled occupancy change, include turnover dates, room-release sequence and the final walkthrough contact.', 'For multi-tenant facilities, distinguish shared corridors and restrooms from spaces maintained by individual tenants.'],
  'Rigby': ['Include the full jobsite address and available utilities when requesting cleaning for a newly completed space.', 'List the rooms, floor materials and preferred access window so the recurring scope matches the actual building.'],
  'St. Anthony': ['For a handover with limited access days, provide the earliest release date and any work that will continue after cleaning.', 'Clarify building access, supply storage and who handles consumables before selecting a service frequency.'],
  'Driggs': ['Coordinate the requested handover date with site access, deliveries and weather-related access restrictions before the crew schedule is confirmed.', 'For seasonally changing occupancy, identify when public areas need extra attention and when access is limited.'],
  'Twin Falls': ['For a Magic Valley project, provide the full site location, cleaning phases and handover window so travel and access can be planned together.', 'Separate routine office or customer-area work from industrial zones requiring their own access review.'],
  'Boise': ['For a downtown or multi-floor project, identify loading access, parking and elevator reservations before the final-clean window is agreed.', 'For occupied offices, document suite access, shared landlord areas and after-hours entry requirements.'],
  'Meridian': ['For a new commercial buildout, align final cleaning with fixture installation, tenant deliveries and the opening walkthrough.', 'For growing workplaces, separate daily restroom and break-room needs from periodic floor and glass work.'],
  'Nampa': ['For a warehouse or commercial handover, separate office areas, accessible floor space and any operational equipment excluded from the scope.', 'For mixed-use facilities, define the office and public-facing zones separately from loading or production areas.'],
  'Caldwell': ['For a buildout near an occupied business, identify barriers and trade activity that could introduce dust after the final pass.', 'Confirm customer hours, staff access and which shared spaces are the tenant’s responsibility.'],
  'Eagle': ['For a tenant improvement or new office, confirm finish materials and any manufacturer restrictions before residue removal is scoped.', 'For professional offices, identify private rooms, reception areas and surfaces that should not be moved or handled.'],
  'Logan': ['For a Cache Valley handover, list phased release dates and occupied spaces so final cleaning can be separated from continuing work.', 'For buildings with variable occupancy, plan busy-period restroom and entry care separately from low-use rooms.'],
  'Ogden': ['For a renovation or commercial handover, identify loading access, floor conditions and any spaces remaining in use.', 'For office and operational buildings, separate recurring public-area cleaning from restricted work zones.'],
  'Layton': ['For a retail or office buildout, include the opening date, fixture-delivery schedule and the person approving completed work.', 'For customer-facing premises, match restroom, entry-glass and waiting-area tasks to operating hours.'],
  'Salt Lake City': ['For downtown and multi-floor jobsites, confirm loading docks, parking and elevator bookings before requesting a final-clean window.', 'For managed buildings, document tenant access and the division between common-area and private-suite cleaning.'],
  'West Valley City': ['For a commercial or warehouse handover, mark active loading areas and distinguish construction debris from regulated or operational waste.', 'For mixed office and warehouse properties, define accessible zones and coordinate the cleaning route with traffic.'],
  'Sandy': ['For an office renovation, confirm occupied floors, protected finishes and any later trade visits that may require touch-ups.', 'For offices with shared amenities, list the rooms and restocking responsibilities that belong in your agreement.'],
  'Provo': ['For a phased turnover, provide room-release dates and the final walkthrough contact before the cleaning schedule is confirmed.', 'For buildings with changing occupancy, separate peak-use cleaning needs from periodic detailed work.'],
  'Orem': ['For a retail or commercial buildout, coordinate the final pass with shelving, fixture installation and stock deliveries.', 'For busy public-facing facilities, confirm opening hours, entry areas and restroom traffic when setting the scope.'],
};
/** Geographic proximity, not population or marketing tier, determines nearby links. */
export function nearbyLocations(location: ServiceLocation, limit = 4): ServiceLocation[] {
  const distance = (other: ServiceLocation) => {
    if (!location.coordinates || !other.coordinates) return Infinity;
    const radians = Math.PI / 180;
    const a = Math.sin((other.coordinates.lat - location.coordinates.lat) * radians / 2) ** 2 +
      Math.cos(location.coordinates.lat * radians) * Math.cos(other.coordinates.lat * radians) *
      Math.sin((other.coordinates.lng - location.coordinates.lng) * radians / 2) ** 2;
    return 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };
  return allServiceLocations.filter(other => other.state === location.state && other.name !== location.name)
    .sort((a, b) => distance(a) - distance(b) || a.name.localeCompare(b.name)).slice(0, limit);
}
