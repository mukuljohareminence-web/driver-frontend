export const getRarityColor = (rarity: string): string => {
  switch (rarity) {
    case 'Common':
      return 'bg-gray-100 text-gray-700';
    case 'Rare':
      return 'bg-blue-100 text-blue-700';
    case 'Epic':
      return 'bg-purple-100 text-purple-700';
    case 'Legendary':
      return 'bg-[#F59E0B26] text-orange-color';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export const getRarityBorderColor = (
  rarity: string,
  earned: boolean,
): string => {
  // If badge is locked (not earned), always return gray border
  if (!earned) {
    return 'border-[#E5E7EB] bg-[#F3F4F64D]    shadow-none';
  }

  // For earned badges, apply rarity-based border colors
  switch (rarity) {
    case 'Rare':
      return 'border-blue-color bg-white shadow-[0_4px_20px_0px_rgba(59,130,246,0.15)]';
    case 'Epic':
      return 'border-purple-color bg-white shadow-[0_4px_20px_0px_rgba(139,92,246,0.2)]';
    case 'common':
      return 'border-[#9CA3AF] bg-white shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1)]';
    default:
      return 'border-[#E5E7EB] bg-[#F3F4F64D]  shadow-none';
  }
};
